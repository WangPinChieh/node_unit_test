export function flatFolders(folders) {
  let result = [];
  
  folders.forEach(folder => {
    if(folder.Folders.length > 0)
    {
        result = result.concat(flatFolders(folder.Folders));
    }
    result.push(folder.ServerRelativeUrl) 
  });

  return result;
}
