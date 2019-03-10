import {Component, OnInit} from "@angular/core";
import * as fs from 'tns-core-modules/file-system';

@Component({
    selector: "Search",
    moduleId: module.id,
    templateUrl: "./search.component.html"
})
export class SearchComponent implements OnInit {
    listArray;

    constructor() {
        // Use the constructor to inject services.
    }

    ngOnInit(): void {
        const androidDownloadsPath = android.os.Environment.getExternalStoragePublicDirectory(android.os.Environment.DIRECTORY_DOWNLOADS).toString();
        console.log(androidDownloadsPath);

        
        const folderPath = androidDownloadsPath;

        let internalFolder = fs.Folder.fromPath(folderPath);
        console.log(fs.Folder.exists(internalFolder.path));

        console.log(internalFolder);
        internalFolder
            .getEntities()
            .then((entities) => {
                console.log(entities);
                // entities is array with the document's files and folders.
                // entities.forEach((entity) => {
                //     let  fileSize  =  fs.File.fromPath(entity.path).size;
                //     this.listArray.push({
                //         name: entity.name,
                //         path: entity.path,
                //         lastModified: entity.lastModified.toString(),
                //         size : fileSize
                //     });
                // });
                // console.log('LIST ARRAY:', this.listArray)
            }).catch((err) => {
            // Failed to obtain folder's contents.
            console.log('ERROR: ', err);
            console.log(err.stack);
        });
    }
}
