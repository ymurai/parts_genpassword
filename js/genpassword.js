// パスワードの生成
class GenPassword {
  // メンバ変数
  character = [];
  number = 0;
  outputs = 0;
  result = [];

  // メイン
  generate() {
    const characterList = this.createCharacterList(this.character);
    for (let i = 0; i < this.outputs; i++) {
      this.result.push( this.pickupRmdString(this.number, characterList) )
    }
    return this.result;
  }

  // 候補文字列の作成
  createCharacterList(character) {
    let characterList = '';
    for (let i = 0; i < character.length; i++) {
      switch (character[i]) {
        case 'upper_eng':
          characterList += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
          break;
        case 'lower_eng':
          characterList += 'abcdefghijklmnopqrstuvwxyz';
          break;
        case 'number':
          characterList += '0123456789';
          break;
        case 'symbol':
          characterList += '-_/*+.,!?#$%&()~|';
          break;
      }
    }
    return characterList;
  }

  // ランダムな文字列を生成
  pickupRmdString(number, characterList) {
    let result = '';
    for (let i = 0; i < number; i++) {
      const point = Math.floor(Math.random() * characterList.length);
      result += characterList.substring(point, point + 1);
    }
    return result
  }
}

