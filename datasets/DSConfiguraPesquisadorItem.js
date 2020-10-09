function defineStructure() {

}

function onSync(lastSyncDate) {

}

function createDataset(fields, constraints, sortFields) {

	var processo = fields[0];

	//Cria a constraint para buscar os formulários ativos
	var c1 = DatasetFactory.createConstraint("metadata#active", true, true, ConstraintType.MUST);
	var c2 = DatasetFactory.createConstraint("config_nome_dataset", processo, processo, ConstraintType.MUST);
	var constraints = new Array(c1, c2);

	// Consulta dataset do formulário que tem o elemento Pai x Filho
	var datasetPrincipal = DatasetFactory.getDataset("DSConfiguraPesquisador", null, constraints, null);
	var resultados = [];
	for (var i = 0; i < datasetPrincipal.rowsCount; i++) {
		var documentId = datasetPrincipal.getValue(i, "metadata#id");
		var documentVersion = datasetPrincipal.getValue(i, "metadata#version");

		//Cria as constraints para buscar os campos filhos, passando o tablename, número da formulário e versão
		var c1 = DatasetFactory.createConstraint("tablename", "ConfiguraPesquisadorItem", "ConfiguraPesquisadorItem", ConstraintType.MUST);
		var c2 = DatasetFactory.createConstraint("metadata#id", documentId, documentId, ConstraintType.MUST);
		var c3 = DatasetFactory.createConstraint("metadata#version", documentVersion, documentVersion, ConstraintType.MUST);
		var constraintsFilhos = new Array(c1, c2, c3);

		//Busca o dataset
		var datasetFilhos = DatasetFactory.getDataset("DSConfiguraPesquisador", null, constraintsFilhos, null);
		return datasetFilhos;
		//	for (var j = 0; j < datasetFilhos.rowsCount; j++) {
		//		datasetFilhos.getValue(j, "nome_campo_filho"),
		//	}

	}

}


function onMobileSync(user) {

}