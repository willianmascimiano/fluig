 /**
 * CONFIGURACOES DE INTEGRACAO FLUIG
 */
var FLUIG_BASE_URL = "http://minhaurl.com";
var PROCESS_NAME = 'selecionar_pessoa';


var CONSUMER_KEY = 'x';
var CONSUMER_SECRET = 'x';

var ACCESS_TOKEN = 'x';
var TOKEN_SECRET = 'x';




function startProcess() {

var form = FormApp.getActiveForm();
var formResponses = form.getResponses();
var formResponseslength = formResponses.length;

/**
 * Obter o último registro do formulário.
 */
var nome = formResponses[formResponseslength-1].getItemResponses()[0].getResponse();
var telefone = formResponses[formResponseslength-1].getItemResponses()[1].getResponse();
var salario = formResponses[formResponseslength-1].getItemResponses()[2].getResponse();


var service = getFluigService();
  var url = FLUIG_BASE_URL  + '/process-management/api/v2/processes/' + PROCESS_NAME + '/start';

/**
 * Conteúdo para inserir no formulário do processo.
 */
var data = {
  'targetAssignee': 'academy.aluno',
  'subProcessTargetState': "0",
  'comment': "",
  'formFields': {
     "nome" : nome,
     "telefone" : telefone,
     "salario": salario
  }

};



var options = {
  'method' : 'post',
  'contentType': 'application/json',
  'payload' : JSON.stringify(data)
};

  var response = service.fetch(url, options);
  var result = JSON.parse(response.getContentText());

  Logger.log(JSON.stringify(result, null, 2));



Logger.log(nome);Logger.log(telefone);Logger.log(salario)

MailApp.sendEmail("wmsilva191@gmail.com","TESTE", "SATUS DA INTEGRACAO");

 
}



function getFluigService() {
  return OAuth1.createService('fluig')
      .setConsumerKey(CONSUMER_KEY)
      .setConsumerSecret(CONSUMER_SECRET)
      .setAccessToken(ACCESS_TOKEN, TOKEN_SECRET);
}