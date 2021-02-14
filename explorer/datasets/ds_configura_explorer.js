function defineStructure() {

}

function onSync(lastSyncDate) {

}

function createDataset(fields, constraints, sortFields) {
	
	
	/**
	 *  Créditos: 
	 *  	Este código utiliza a estrutura de navegação em dataset pai x filho, gerado pelo SNIPPETS, plugin do fluig.
	 * */
	
	

	var processo = fields[0];

	/**
	 * O formulário frm_consulta_explorer é um configurador para permitir que seja
	 * consultado qualquer dataset através deste explorer.
	 * */
	
	
	var c1 = DatasetFactory.createConstraint("metadata#active", true, true, ConstraintType.MUST);
	var c2 = DatasetFactory.createConstraint("config_nome_dataset", processo, processo, ConstraintType.MUST);
	var constraints = new Array(c1, c2);

	// Consulta dataset do formulário que tem o elemento Pai x Filho
	
	
	
	var datasetPrincipal = DatasetFactory.getDataset("ds_frm_configura_explorer", null, constraints, null);
	var resultados = [];
	for (var i = 0; i < datasetPrincipal.rowsCount; i++) {
		var documentId = datasetPrincipal.getValue(i, "metadata#id");
		var documentVersion = datasetPrincipal.getValue(i, "metadata#version");

		
		/***
		 * 
		 * Criar as constraints para consultar os datasets para consultar os itens da tabela do formulário pai x filho.
		 * 
		 * */
		var c1 = DatasetFactory.createConstraint("tablename", "configura_explorer_item", "configura_explorer_item", ConstraintType.MUST);
		var c2 = DatasetFactory.createConstraint("metadata#id", documentId, documentId, ConstraintType.MUST);
		var c3 = DatasetFactory.createConstraint("metadata#version", documentVersion, documentVersion, ConstraintType.MUST);
		var constraintsFilhos = new Array(c1, c2, c3);

		/**
		 * Consultar no dataset do formulário os dados referentes à tabela de itens do configurador
		 * 
		 * */
		var datasetFilhos = DatasetFactory.getDataset("ds_frm_configura_explorer", null, constraintsFilhos, null);
		return datasetFilhos;
		 

	}

}


function onMobileSync(user) {
	
	
	

}