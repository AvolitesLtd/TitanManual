pandoc export.docx -t markdown --extract-media "media" -o export.md

gcsplit --prefix='manual' --suffix-format='%03d.md'  export.md /Ref_Heading[1-2]/ "{*}"

