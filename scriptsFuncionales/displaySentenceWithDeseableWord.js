content = "Cuando los créditos cuenten con garantías por “deficientes de recuperación " 
          + "final del saldo insoluto”, provistas por el Fondo de Operación y Financiamiento "
          + "Bancario a la Vivienda (FOVI) o alguna otra entidad financiera, cuyo cobro esté "
          + "sujeto al cumplimiento de los requisitos establecidos en el contrato respectivo, "
          + "las Instituciones beneficiarias de dichas garantías deberán generar reservas "
          + "preventivas para aquellos casos en los que consideren que no se cumplirán dichos "
          + "requisitos, por un monto igual a la mejor estimación del saldo remanente del crédito "
          + "al término de su plazo de pago descontado a valor presente. (71) Lo anterior, "
          + "con independencia de la constitución de las reservas preventivas para riesgos "
          + "crediticios que las Instituciones deben de constituir de conformidad con la "
          + "presente sección. "

content2 = "Cuando los créditos cuenten con garantías por “deficientes de recuperación final del saldo insoluto”, provistas por el Fondo de Operación y Financiamiento Bancario a la Vivienda (FOVI) o alguna otra entidad financiera, cuyo cobro esté sujeto al cumplimiento de los requisitos establecidos en el contrato respectivo, las Instituciones beneficiarias de dichas garantías deberán generar reservas preventivas para aquellos casos en los que consideren que no se cumplirán dichos requisitos, por un monto igual a la mejor estimación del saldo remanente del crédito al término de su plazo de pago descontado a valor presente. (71) Lo anterior, con independencia de la constitución de las reservas preventivas para riesgos crediticios que las Instituciones deben de constituir de conformidad con la presente sección. "
content3 = "Las Instituciones deberán clasificar las Órdenes que capturen en su Sistema de Recepción y Asignación para su transmisión a la casa de bolsa respectiva, quien a su vez lo hará a las Bolsas." +
" (60) En cualquier caso, el Sistema de Recepción y Asignación de las Instituciones deberá contener al menos, la posibilidad de registrar Órdenes para su ejecución por la casa de bolsa correspondiente, conforme a las modalidades siguientes, con independencia del tipo de instrucción que las origina:"


contentSplited = content2.split(/(deberán)/ig)

funcionPerrona = () => {
  variable = ''
  contentSplited.forEach( (parragraph, index) => {
    //console.log(parragraph)
    if( parragraph.includes("deberán") ){
      //console.log(parragraph)
      //console.log(index)
      variable = index
    }
  })
  return variable
}

hasTheWord = funcionPerrona()
console.log(hasTheWord)

contentToDisplay = contentSplited[hasTheWord] + contentSplited[hasTheWord + 1]
console.log(contentToDisplay)

console.log("SI SI PAPA SI SI SI SIS ISSIIS SI SI SI SIS")

descriptionGenerator = (articleContent) => {
  contentSplited = articleContent.split(/(deberán)/ig)
  generatedDescription = "" 
  returnedIndex = ""
  contentSplited.forEach( (sentence, index) => {
    //console.log(parragraph)
    if(returnedIndex == ""){
      console.log("Entró a la validación de palabras");
      if( sentence.includes("deberán") ){
        console.log("Encontró Algo")
        //console.log(index)
        returnedIndex = index
      }
    }else{
      console.log("Ya tiene un valor : " , returnedIndex);
    }
  })
  console.log(returnedIndex);
  if((returnedIndex+1) < contentSplited.length){
    console.log("Si es mayor")
    generatedDescription = contentSplited[returnedIndex] + contentSplited[returnedIndex+1]
  }else{
    console.log("No es mayor")
    generatedDescription = contentSplited[returnedIndex-1] + contentSplited[returnedIndex]
  }
  return generatedDescription
}

console.log(descriptionGenerator(content2))

descriptionGenerator2 = (articleContent) => {
  contentSplited = articleContent.match(/(.*)[deberán|deberá|podrá|podrán|será](.*(\.|\:))/ig)
  generatedDescription = "" 
  returnedIndex = ""
  contentSplited.forEach( (sentence, index) => {
    //console.log(parragraph)
    if(returnedIndex == ""){
      console.log("Entró a la validación de palabras");
      if( sentence.includes("deberán") ){
        console.log("Encontró Algo")
        //console.log(index)
        returnedIndex = index
      }
    }else{
      console.log("Ya tiene un valor : " , returnedIndex);
    }
  })
  console.log(returnedIndex);
  if((returnedIndex+1) < contentSplited.length){
    console.log("Si es mayor")
    generatedDescription = contentSplited[returnedIndex] + contentSplited[returnedIndex+1]
  }else{
    console.log("No es mayor")
    generatedDescription = contentSplited[returnedIndex-1] + contentSplited[returnedIndex]
  }
  return generatedDescription
}

console.log(descriptionGenerator2(content2))

const descriptionGenerator3 = (articleContent) => {
  let contentSplited = articleContent.match(/([a-zA-Z\u00C0-\u024F\u1E00-\u1EFF,\s\r\n\d]*)(deberán|deberá|podrÃ¡|podrÃ¡n|serÃ¡)([a-zA-Z\u00C0-\u024F\u1E00-\u1EFF,\s\r\n\d]+[.:]{0,1})/ig)
  let generatedDescription = "" 
  let returnedIndex = null
  console.log("ESTO ES EL CONTENIDO SPLITEADO: " , contentSplited)
  contentSplited.forEach( (sentence, index) => {
    console.log("ESTO ES LA SENTENCIA ACTUAL: " , sentence)
    console.log(returnedIndex)
    console.log(returnedIndex == null)
    if(returnedIndex == null){
      //console.log("Entró a la validación de palabras");
      // if( sentence.includes("deberán") || sentence.includes("deberá") || sentence.includes("podrÃ¡") || sentence.includes("podrÃ¡n") || sentence.includes("serÃ¡") ){
      //   console.log("Encontró Algo")
      //   console.log("Este es el index: " , index)
        returnedIndex = index
      // }
    }else{
      console.log("Ya tiene un valor : " , returnedIndex);
    }
  })
  console.log(returnedIndex);
  if((returnedIndex) <= contentSplited.length){
    console.log("Si es mayor")
    generatedDescription = contentSplited[returnedIndex];
  }
  console.log("Descripción Generada : " , generatedDescription);

  console.log("   ")
  console.log("   ")
  console.log("   ")
  
  return generatedDescription
}