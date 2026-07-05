  //<====Versão 6.0 ✋😎🤚=====>



var opcoes = {
  GLOBAL              : 'global',
  LAYOUT              : 'layout',
  COMPONENTES         : 'componentes',
  SCRIPTS             : 'SCRIPT' 
}

function importar(escolhas) {

  if (!Array.isArray(escolhas)){
    escolhas = [escolhas]
  }

  var conteudoFinal = '';

  for (var i = 0; i < escolhas.length; i++) {
    var nomeDoArquivo = escolhas[i];
    conteudoFinal +=  HtmlService.createHtmlOutputFromFile(nomeDoArquivo).getContent();
  }

  return conteudoFinal;
}



/**
 * Retorna o bloco de CSS padronizado para formulários.
 * @return {string} Código CSS com as tags <style> embutidas.
 */
/*function getCssFormularios() {
  // A função getContent() pega todo o texto de dentro do arquivo HTML!
  return HtmlService.createHtmlOutputFromFile('formulario').getContent();
}*/














