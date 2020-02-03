const fs = require('fs');
const path = require('path');


function includeAll(dir, ext = undefined) {

    if (fs.existsSync(dir)) {
        //for directory : return deep , for file - return the file as array
        return fs.statSync(dir).isDirectory()
            ? lsDeep(dir, ext)
            : [dir];
    } else {
        // console.warn("no such file/directory:", dir);
        //return [];
        throw(`Error in includeAllCpp() : no such file/directory: ${dir}`);
    }
}

/**
 * return array of files in directory, recursive
 * @param {string} dir the root directory
 * @param {string|[string]} ext optional list of file extensions, i.e. ["cpp","c"]
 */
function lsDeep(dir, ext = undefined) {
    // make ext an array and verify starting "."
    if (typeof ext === 'string') {
        ext = [ext];
    }
    if (ext instanceof Array) {
        ext = ext.map(x => x.startsWith('.') ? x : `.${x}`);
    }

    let files = [];
    let subDirs = [];
    fs
        .readdirSync(dir)
        .map(file => path.join(dir, file))
        .forEach(filepath => {
            let stats = fs.statSync(filepath);
            if (stats.isDirectory()) {
                //dir - add to subdirs for recursive search 
                subDirs.push(filepath);
            } else if (stats.isFile()) {
                //file - add if match extensions
                if (ext == null) {
                    files.push(filepath);
                } else if (ext instanceof Array) {
                    let fileExt = path.extname(filepath);
                    if (ext.includes(fileExt)) {
                        files.push(filepath);
                    }
                }
            }
        });
    //append deep dive:
    subDirs.forEach(subDir => {
        files = [...files, ...lsDeep(subDir, ext)];
    });

    //replace all "\" to "/"
    return files.map(x => x.replace(/\\/g, '/'));
}

module.exports = {
    //include: (dir, ext) => lsDeep(dir, ext).map(item => `"${item}"`).join(' ')
    includeAllCpp: (dir) => includeAll(dir, ['cpp']).map(item => `"${item}"`).join(" ")
};
