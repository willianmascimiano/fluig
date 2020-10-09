/*******************************************************************************
 * WILLIAN MASCIMIANO CONTATO: http://willian.eti.br 
 * ARQUIVO DE EXEMPLO PARA EXECUÇÃO DE FORMULA VISUAL DO RM PELO WEBSERVICE E FLUIG.
 ******************************************************************************/

function createDataset(fields, constraints, sortFields) {
  
    
    
	

	try {
		var NOME_SERVICO = "RMProcessTESTE";
		var CAMINHO_SERVICO = 'com.totvs.WsProcess';

		var processService = ServiceManager.getServiceInstance(NOME_SERVICO);
		if (processService == null) {
			throw "Servico nao encontrado: " + NOME_SERVICO;
		}

		var serviceLocator = processService.instantiate(CAMINHO_SERVICO);
		if (serviceLocator == null) {
			throw "Instancia do servico nao encontrada: " + NOME_SERVICO
					+ " - " + CAMINHO_SERVICO;
		}

		var service = serviceLocator.getRMIwsProcess();
		if (service == null) {
			throw "Instancia do dataserver do invalida: " + NOME_SERVICO
					+ " - " + CAMINHO_SERVICO;
		}

		var serviceHelper = processService.getBean();
		if (serviceHelper == null) {
			throw "Instancia do service helper invalida: " + NOME_SERVICO
					+ " - " + CAMINHO_SERVICO;
		}

		var authService = serviceHelper.getBasicAuthenticatedClient(service,
				"com.totvs.IwsProcess", "mestre", "senha");
		if (serviceHelper == null) {
			throw "Instancia do auth service invalida: " + NOME_SERVICO + " - "
					+ CAMINHO_SERVICO;
		}
		
		
		
		
		var fieldsXml = '<?xml version="1.0" encoding="utf-16"?>'
+'<GlbWorkflowExecParamsProc z:Id="i1" xmlns="http://www.totvs.com.br/RM/" xmlns:i="http://www.w3.org/2001/XMLSchema-instance" xmlns:z="http://schemas.microsoft.com/2003/10/Serialization/">'
+'  <ActionModule xmlns="http://www.totvs.com/">G</ActionModule>'
+'  <ActionName xmlns="http://www.totvs.com/">GlbWorkflowExecAction</ActionName>'
+'  <CodUsuario xmlns="http://www.totvs.com/">mestre</CodUsuario>'
+'  <Context z:Id="i2" xmlns="http://www.totvs.com/" xmlns:a="http://www.totvs.com.br/RM/">'
+'    <a:_params xmlns:b="http://schemas.microsoft.com/2003/10/Serialization/Arrays">'
+'      <b:KeyValueOfanyTypeanyType>'
+'        <b:Key i:type="c:string" xmlns:c="http://www.w3.org/2001/XMLSchema">$EXERCICIOFISCAL</b:Key>'
+'        <b:Value i:type="c:int" xmlns:c="http://www.w3.org/2001/XMLSchema">105</b:Value>'
+'      </b:KeyValueOfanyTypeanyType>'
+'      <b:KeyValueOfanyTypeanyType>'
+'        <b:Key i:type="c:string" xmlns:c="http://www.w3.org/2001/XMLSchema">$CODLOCPRT</b:Key>'
+'        <b:Value i:type="c:int" xmlns:c="http://www.w3.org/2001/XMLSchema">-1</b:Value>'
+'      </b:KeyValueOfanyTypeanyType>'
+'      <b:KeyValueOfanyTypeanyType>'
+'        <b:Key i:type="c:string" xmlns:c="http://www.w3.org/2001/XMLSchema">$CODTIPOCURSO</b:Key>'
+'        <b:Value i:type="c:int" xmlns:c="http://www.w3.org/2001/XMLSchema">-1</b:Value>'
+'      </b:KeyValueOfanyTypeanyType>'
+'      <b:KeyValueOfanyTypeanyType>'
+'        <b:Key i:type="c:string" xmlns:c="http://www.w3.org/2001/XMLSchema">$EDUTIPOUSR</b:Key>'
+'        <b:Value i:type="c:string" xmlns:c="http://www.w3.org/2001/XMLSchema">-1</b:Value>'
+'      </b:KeyValueOfanyTypeanyType>'
+'      <b:KeyValueOfanyTypeanyType>'
+'        <b:Key i:type="c:string" xmlns:c="http://www.w3.org/2001/XMLSchema">$CODUNIDADEBIB</b:Key>'
+'        <b:Value i:type="c:int" xmlns:c="http://www.w3.org/2001/XMLSchema">-1</b:Value>'
+'      </b:KeyValueOfanyTypeanyType>'
+'      <b:KeyValueOfanyTypeanyType>'
+'        <b:Key i:type="c:string" xmlns:c="http://www.w3.org/2001/XMLSchema">$CODCOLIGADA</b:Key>'
+'        <b:Value i:type="c:int" xmlns:c="http://www.w3.org/2001/XMLSchema">1</b:Value>'
+'      </b:KeyValueOfanyTypeanyType>'
+'      <b:KeyValueOfanyTypeanyType>'
+'        <b:Key i:type="c:string" xmlns:c="http://www.w3.org/2001/XMLSchema">$RHTIPOUSR</b:Key>'
+'        <b:Value i:type="c:string" xmlns:c="http://www.w3.org/2001/XMLSchema">-1</b:Value>'
+'      </b:KeyValueOfanyTypeanyType>'
+'      <b:KeyValueOfanyTypeanyType>'
+'        <b:Key i:type="c:string" xmlns:c="http://www.w3.org/2001/XMLSchema">$CODIGOEXTERNO</b:Key>'
+'        <b:Value i:type="c:string" xmlns:c="http://www.w3.org/2001/XMLSchema">-1</b:Value>'
+'      </b:KeyValueOfanyTypeanyType>'
+'      <b:KeyValueOfanyTypeanyType>'
+'        <b:Key i:type="c:string" xmlns:c="http://www.w3.org/2001/XMLSchema">$CODSISTEMA</b:Key>'
+'        <b:Value i:type="c:string" xmlns:c="http://www.w3.org/2001/XMLSchema">G</b:Value>'
+'      </b:KeyValueOfanyTypeanyType>'
+'      <b:KeyValueOfanyTypeanyType>'
+'        <b:Key i:type="c:string" xmlns:c="http://www.w3.org/2001/XMLSchema">$CODUSUARIOSERVICO</b:Key>'
+'        <b:Value i:type="c:string" xmlns:c="http://www.w3.org/2001/XMLSchema" />'
+'      </b:KeyValueOfanyTypeanyType>'
+'      <b:KeyValueOfanyTypeanyType>'
+'        <b:Key i:type="c:string" xmlns:c="http://www.w3.org/2001/XMLSchema">$CODUSUARIO</b:Key>'
+'        <b:Value i:type="c:string" xmlns:c="http://www.w3.org/2001/XMLSchema">mestre</b:Value>'
+'      </b:KeyValueOfanyTypeanyType>'
+'      <b:KeyValueOfanyTypeanyType>'
+'        <b:Key i:type="c:string" xmlns:c="http://www.w3.org/2001/XMLSchema">$IDPRJ</b:Key>'
+'        <b:Value i:type="c:int" xmlns:c="http://www.w3.org/2001/XMLSchema">-1</b:Value>'
+'      </b:KeyValueOfanyTypeanyType>'
+'      <b:KeyValueOfanyTypeanyType>'
+'        <b:Key i:type="c:string" xmlns:c="http://www.w3.org/2001/XMLSchema">$CHAPAFUNCIONARIO</b:Key>'
+'        <b:Value i:type="c:string" xmlns:c="http://www.w3.org/2001/XMLSchema">-1</b:Value>'
+'      </b:KeyValueOfanyTypeanyType>'
+'      <b:KeyValueOfanyTypeanyType>'
+'        <b:Key i:type="c:string" xmlns:c="http://www.w3.org/2001/XMLSchema">$CODFILIAL</b:Key>'
+'        <b:Value i:type="c:int" xmlns:c="http://www.w3.org/2001/XMLSchema">3</b:Value>'
+'      </b:KeyValueOfanyTypeanyType>'
+'    </a:_params>'
+'    <a:Environment>DotNet</a:Environment>'
+'  </Context>'
+'  <PrimaryKeyList xmlns="http://www.totvs.com/" xmlns:a="http://schemas.microsoft.com/2003/10/Serialization/Arrays" />'
+'  <PrimaryKeyNames i:nil="true" xmlns="http://www.totvs.com/" xmlns:a="http://schemas.microsoft.com/2003/10/Serialization/Arrays" />'
+'  <CodColigada>1</CodColigada>'
+'  <DataSet i:nil="true" />'
+'  <IdWorkflow>5</IdWorkflow>'
+'  <OwnerData i:nil="true" />'
+'  <Parameters i:nil="true" />'
+'</GlbWorkflowExecParamsProc>'; 
		
		
    
		 
	var result = authService.executeWithXmlParams("GlbWorkflowExecProc", fieldsXml);
	 
	//O TBC retorna os valores da chave caso o registro tenha sido salvo,
	//caso contrário, a exceção ocorrida é enviada pelo mesmo retorno, porém
	//formatada entre linhas '==='
	var dataset = DatasetBuilder.newDataset();
	dataset.addColumn('MENSAGEM');
	if ((result != null) && (result!==1))
	{
		log.info("Erro no serviço." );	
		 
		
		dataset.addRow(new Array(result));
		
		
	}else{
	
		dataset.addRow(new Array("Job Executado"));
	}
	
    } catch(e) {
    	
		dataset.addRow(new Array("Gerou Erro: "+  e));
		 
    }
	 
  
    return dataset;
    
    
}

function parseContext(constraints) {
    var context = "";

    if ((constraints != null) && (constraints.length > 0) && (constraints[0].getFieldName() == "RMSContext")) {
        context = constraints[0].getInitialValue();
    }

}
