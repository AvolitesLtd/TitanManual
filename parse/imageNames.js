const path = require('path');
const fs = require('fs');
const avoParse = require('./avoParse');

function newImageName(images, currentImage, alt, ext, copy=0) {
  // make a new name for the image that isn't already taken

  let newName = alt.replace(/[^\w]/g,"-").replace(/-{2,}/g,'-').replace(/-$/gm,'') + (copy++ ? '-'+ copy : '') + ext;
  
  for(let image in images) {
    if((image != currentImage) && (path.basename(image) == newName || path.basename(images[image].new) == newName)) {
      return newImageName(images, currentImage, alt, ext, copy);
    }
  }

  return newName;
}

// convert list of files to object to keep track of changes
const images = avoParse.getFilesSync(avoParse.paths.staticImagesDir).reduce((obj, item) => {
  obj[item] = {
    original: item,
    new: '',
    usedIn: []
  };
  return obj;
}, {});

const filenames = avoParse.getFilesSync(avoParse.paths.docsDir).concat(avoParse.getFilesSync(avoParse.paths.versionedDocsDir));

for(let image in images) {
  if (image.indexOf(".DS_Store") !== 0) {
    imageWebPath = image.replace(avoParse.paths.staticDir,'');

    filenames.forEach((filename) => {
      if (filename.endsWith('.md')) {
        content = fs.readFileSync(filename, 'utf-8');

        // looky for the image
        const re = new RegExp(`!\\[([^\\]]*)\\]\\((${imageWebPath})\\)`,'g');

        content = content.replace(re, (match,alt,src) => {
          images[image].usedIn.push(filename);

          if (!alt) {
            // check alt text is defined for image
            process.emitWarning(`${filename}: No alt text set for '${src}'`);
            alt = 'image';
          }

          if(images[image].new) {
            // has already been found in another file
            src = images[image].new;
          }
          else {
            // newly found
            let newName = newImageName(images, image, alt, path.extname(image));
            images[image].new = imageWebPath.replace(path.basename(image), '') + newName;

            // rename the file
            fs.rename(image,image.replace(path.basename(image), '') + newName, (err) => {
              if (err) throw err;
            });
          }

          return `![${alt}](${images[image].new})`;
        });

        fs.writeFileSync(filename, content);
      }
    });

    fs.writeFile('output/images.json', JSON.stringify(images,null,2), (err) => {
      if (err) throw err;
    });
  }
};