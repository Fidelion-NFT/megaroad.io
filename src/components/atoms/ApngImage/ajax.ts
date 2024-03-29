export const getImgBuffer = (url: string): Promise<ArrayBuffer> => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = 'arraybuffer';

    xhr.onload = function() {
      if (
        xhr.readyState === 4 &&
        (xhr.status === 200 || xhr.status === 304)
      ) {
        resolve(this.response);
      } else {
        reject(new Error(`${url} image load error`));
      }
      // if (this.status === 200) {
      //     resolve(this.response);
      // } else {
      //     reject(this);
      // }
    };
    xhr.send();
  });
};
