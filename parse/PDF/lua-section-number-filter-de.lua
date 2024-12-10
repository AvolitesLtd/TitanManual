local make_sections = (require 'pandoc.utils').make_sections
local section_numbers = {}

function populate_section_numbers (doc)
  function populate (elements)
    for _, el in pairs(elements) do
      if el.t == 'Div' and el.attributes.number then
        section_numbers['#' .. el.attr.identifier] = el.attributes.number
        populate(el.content)
      end
    end
  end

  populate(make_sections(true, nil, doc.blocks))
end

function resolve_section_ref (link)
  local section_number = section_numbers[link.target]
  local link_text = pandoc.utils.stringify(link.content)

  if (link_text ~= nil and section_number and #section_number > 0) then
    link_text = link_text .. " (Abschnitt " .. section_number .. ")"
  end
  local formatted_text = pandoc.Str(link_text)
  return pandoc.Link({formatted_text}, link.target, link.title, link.attr)
end

return {
  {Pandoc = populate_section_numbers},
  {Link = resolve_section_ref}
}
