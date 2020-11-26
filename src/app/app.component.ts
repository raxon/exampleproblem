import { Component, OnInit } from '@angular/core';
declare var PESDK;

import { Plugins, FilesystemDirectory, CameraResultType } from '@capacitor/core';
const { Filesystem, Camera } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  // capacitor://localhost/_capacitor_file_/private/var/mobile/Containers/Data/Application/F0EE6FA1-2A41-4E89-B641-0E6F603B0ACE/tmp/photo-1.jpg
  imageUrl = ''
  imgNative = ''
  async ngOnInit() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri
    });
    this.imageUrl = image.webPath;
    console.log(this.imageUrl)

    this.imgNative = (await Filesystem.getUri({ path: this.imageUrl, directory: FilesystemDirectory.Data })).uri
console.log(this.imgNative)
  }


  btn1() {
    PESDK.openEditor(
      console.log,
      console.log,
      PESDK.loadResource("https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png")
    );
  }


  btn2() {
    PESDK.openEditor(
      console.log,
      console.log,
      { uri: "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png" }
    );
  }

  btn3() {
    PESDK.openEditor(
      console.log,
      console.log,
      PESDK.loadResource("./public/assets/Thinking-of-getting-a-cat.png")
    );
  }


  btn4() {
    PESDK.openEditor(
      console.log,
      console.log,
      { uri: "./public/assets/Thinking-of-getting-a-cat.png" }
    );
  }

  btn5() {
    PESDK.openEditor(
      console.log,
      console.log,
      PESDK.loadResource(this.imageUrl)
    );
  }


  btn6() {
    PESDK.openEditor(
      console.log,
      console.log,
      { uri: this.imageUrl }
    );
  }
  btn7() {
    PESDK.openEditor(
      console.log,
      console.log,
      PESDK.loadResource(this.imgNative)
    );
  }


  btn8() {
    PESDK.openEditor(
      console.log,
      console.log,
      { uri: this.imgNative }
    );
  }

  private async _readAsBase64(url: string): Promise<string> {
    console.log('start b64');
    const response = await fetch(url);
    const blob = await response.blob();
    return await this._convertBlobToBase64(blob);
  }
  private async _convertBlobToBase64(blob: Blob): Promise<string> {
    console.log('start conv');
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = () => reject();
      reader.onload = () => resolve(reader.result as string);
      reader.readAsDataURL(blob);
    });
  }


}
