class ShiftCipher {
    constructor(num) {
      this.num = num;
    }
  
    encrypt(str) {
      let sentence = str.toLowerCase();
      let encrypted = '';
      for(let i=0; i<str.length; i++) {
        if(sentence[i] == " ") {
          encrypted += " "
        }
        if(sentence.charCodeAt(i) >= 97 && sentence.charCodeAt(i)<=122){
          let aka = sentence.charCodeAt(i) + this.num;
          if(aka>122) {
            encrypted += String.fromCharCode(aka-26).toUpperCase()
          } else{encrypted += String.fromCharCode(aka).toUpperCase()}
        }
      }
      console.log(encrypted);
      return encrypted;
    }
  
    decrypt(str) {
      let sentence = str.toLowerCase();
      let decrypted = '';
      for(let i=0; i<str.length; i++) {
        if(sentence[i] == " ") {
          decrypted += " "
        }
        if(sentence.charCodeAt(i)>=97 && sentence.charCodeAt(i)<=122){
          let aka = sentence.charCodeAt(i) - this.num;
          if(aka< 97) {
            decrypted += String.fromCharCode(aka+26)
          } else{decrypted += String.fromCharCode(aka)}
        }
      }
      console.log(decrypted);
      return decrypted;
    }
  }
  const cipher = new ShiftCipher(1);
  cipher.encrypt('sonya loves techno')
  cipher.decrypt('TPOZB MPWFT UFDIOP')