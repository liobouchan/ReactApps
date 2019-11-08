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
    if( sentence.includes("deberán") ){
      //console.log(parragraph)
      //console.log(index)
      returnedIndex = index
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