// const flatFolders = require('./function')
// const urlJoin = require('url-join')
import {flatFolders} from './function';
import urlJoin from 'url-join';

test("adds 1 + 2 to equal 3", () => {
  var folders = [
    {
      Folders: [
        {
          Folders: [
            {
              Folders: [
                {
                  Folders: [],
                  ServerRelativeUrl:
                    "/teams/My-Site/Shared Documents/Test/2021/NB/800/HP EliteBook 855 G8 Notebook PC/Lancia 15_MV_SKU 3_SN-5CG1196QG9/VPB/VPB-Headphones-20210907174500/VPB/ref",
                },
              ],
              ServerRelativeUrl:
                "/teams/My-Site/Shared Documents/Test/2021/NB/800/HP EliteBook 855 G8 Notebook PC/Lancia 15_MV_SKU 3_SN-5CG1196QG9/VPB/VPB-Headphones-20210907174500/VPB",
            },
            {
              Folders: [],
              ServerRelativeUrl:
                "/teams/My-Site/Shared Documents/Test/2021/NB/800/HP EliteBook 855 G8 Notebook PC/Lancia 15_MV_SKU 3_SN-5CG1196QG9/VPB/VPB-Headphones-20210907174500/config",
            },
          ],
          ServerRelativeUrl:
            "/teams/My-Site/Shared Documents/Test/2021/NB/800/HP EliteBook 855 G8 Notebook PC/Lancia 15_MV_SKU 3_SN-5CG1196QG9/VPB/VPB-Headphones-20210907174500",
        },
      ],
      ServerRelativeUrl:
        "/teams/My-Site/Shared Documents/Test/2021/NB/800/HP EliteBook 855 G8 Notebook PC/Lancia 15_MV_SKU 3_SN-5CG1196QG9/VPB",
    },
  ];

  const expected = [
    "/teams/My-Site/Shared Documents/Test/2021/NB/800/HP EliteBook 855 G8 Notebook PC/Lancia 15_MV_SKU 3_SN-5CG1196QG9/VPB/VPB-Headphones-20210907174500/VPB/ref",
    "/teams/My-Site/Shared Documents/Test/2021/NB/800/HP EliteBook 855 G8 Notebook PC/Lancia 15_MV_SKU 3_SN-5CG1196QG9/VPB/VPB-Headphones-20210907174500/VPB",
    "/teams/My-Site/Shared Documents/Test/2021/NB/800/HP EliteBook 855 G8 Notebook PC/Lancia 15_MV_SKU 3_SN-5CG1196QG9/VPB/VPB-Headphones-20210907174500/config",
    "/teams/My-Site/Shared Documents/Test/2021/NB/800/HP EliteBook 855 G8 Notebook PC/Lancia 15_MV_SKU 3_SN-5CG1196QG9/VPB/VPB-Headphones-20210907174500",
    "/teams/My-Site/Shared Documents/Test/2021/NB/800/HP EliteBook 855 G8 Notebook PC/Lancia 15_MV_SKU 3_SN-5CG1196QG9/VPB",
  ];

  const actual = flatFolders(folders);
  expect(actual).toStrictEqual(expected);
});

test('url join', () => {
  const actual = urlJoin('https://www.google.com', 'query');
  const expected = 'https://www.google.com/query'
  
  expect(actual).toBe(expected);
})