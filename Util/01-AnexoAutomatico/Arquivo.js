/*******************************************************************************
 * CONTATO: http://willian.eti.br Função para Anexar arquivos dentro do GED
 * 
 * Anexar arquivo no GED e em seguida anexar ao processo.
 ******************************************************************************/

/*******************************************************************************
 * PARÂMETROS
 * INSERIR USUÁRIO E SENHA DO FLUIG
 ******************************************************************************/
var FLUIG_CODIGO_EMPRESA = 1;
var FLUIG_AUTH_USUARIO = 'admin';
var FLUIG_AUTH_SENHA = 'admin';
var FLUIG_USUARIO_UPLOAD = 'admin';

function AnexarArquivoGED(pasta, nomeArquivo, arquivoBase64) {

	/***************************************************************************
	 * 
	 * 
	 **************************************************************************/
	try {
		var FLUIG_PASTA_PADRAO = 0;
		if (pasta == 'PADRAO') {
			//Criar uma pasta no Fluig onde irá salvar os anexos.
				var FLUIG_PASTA_PADRAO = 10;
		} 

		var periodicService = ServiceManager
				.getService('WS_ECMDocumentService');
		var serviceHelper = periodicService.getBean();

		var attachmentArray = serviceHelper
				.instantiate('com.totvs.technology.ecm.dm.ws.AttachmentArray');
		var attachment = serviceHelper
				.instantiate('com.totvs.technology.ecm.dm.ws.Attachment');

		attachment.setFileName(nomeArquivo);
		attachment.setFileSize(1);

		attachment.setAttach(true);

		attachment.setEditing(false);
		attachment.setPrincipal(true);

		// var codificacao="ISO-8859-1";
		var codificacao = "UTF-8";
		// attachment.setFilecontent(java.util.Base64.getDecoder().decode(
		// new java.lang.String(arquivoBase64).getBytes(codificacao)));

		attachment.setFilecontent(java.util.Base64.getMimeDecoder().decode(
				new java.lang.String(arquivoBase64).getBytes()));

		attachmentArray.getItem().add(attachment);

		var DMEngineServiceService = serviceHelper
				.instantiate('com.totvs.technology.ecm.dm.ws.ECMDocumentServiceService');
		var service = DMEngineServiceService.getDocumentServicePort();
		if (service == null) {
			throw "Função AnexarArquivo => DMEngineServiceService => Erro ao gerar o serviço";
		}

		var result = service.createSimpleDocument(FLUIG_AUTH_USUARIO,
				FLUIG_AUTH_SENHA, FLUIG_CODIGO_EMPRESA, FLUIG_PASTA_PADRAO,
				FLUIG_USUARIO_UPLOAD, nomeArquivo, attachmentArray);
		if (service == null) {
			throw "Função AnexarArquivo => service.createSimpleDocument";
		}

		log.info("AnexarArquivoGED:AnexarArquivoGED:SUCESSO: "
				+ result.getItem().get(0).getDocumentId());
		hAPI.attachDocument(result.getItem().get(0).getDocumentId());

	} catch (e) {

		throw 'AnexarArquivoGED:ERRO:EXCEPTION:' + e;
	} finally {
		return true;

	}

}


function AnexarArquivo() {
	 
	try {
		 arquivo = GerarArquivo();
		AnexarArquivoGED("PADRAO", "MEUARQUIVO.png", arquivo);
	} catch (e) {
		situacao = false;
		throw e;
	}
}


function GerarArquivo(){
	/***
	* Esta função retorna o Base64 da 
	*
	**/
	
	return "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";
	
}
