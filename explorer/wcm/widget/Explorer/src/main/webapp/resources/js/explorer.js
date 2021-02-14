

var DsFactory = {
		
		//ds_header_list :[],
		//ds_header_field_name : [],
		//ds_header_field_value : [],
		
	

	dataset_name : document.getElementById("config_nome_dataset").value,
	dataset_result : 
			DatasetFactory.getDataset(this.dataset_name, null, null, null).values,

	dsHeaderList: ()=>{


		var result = DatasetFactory.getDataset("ds_configura_explorer", [DsFactory.dataset_name], null,null).values;

		 
		 ds_header_list = new Array();
		 ds_header_field_name = new Array();
		 ds_header_field_value = new Array();
		
		
		for (i = 0; i <= result.length - 1; i++) {
			
			this.ds_header_list.push([ result[i]['config_campo'], result[i]['config_nome'] ] ); 
			 
		}
		
		 
		return ds_header_list;
	},
	
	 
	
	 
	dsHeaderField : function() {
		var cabecalho = new Array();
		var cabecalhoList = new Array();

		cabecalho = this.dsHeaderList();

		for (i = 0; i <= cabecalho.length - 1; i++) {
			cabecalhoList.push({
				"title" : cabecalho[i][1]
			});
		}
		return cabecalhoList;

	},
	
	// Retorna o nome do campo
	dsHeaderValue : function() {
		var cabecalho = new Array();
		var cabecalhoList = new Array();

		cabecalho = this.dsHeaderList();

		for (i = 0; i <= cabecalho.length - 1; i++) {
			cabecalhoList.push(cabecalho[i][0]);
		}

		return cabecalhoList;

	},

}

 












var ExplorerWidget = SuperWidget.extend({
	// variáveis da widget
	variavelNumerica : null,
	variavelCaracter : null,
	myTable : null,
	dataInit : null,

	param_dataset : null,
	
	
	//ds : DsFactory,

	// método iniciado quando a widget é carregada
	init : function() {

		// this.loadTable();
	},

	


	loadTable : function() {

		var that = this;

		that.myTable = FLUIGC.datatable('#explorer_table_' + that.instanceId, {
			dataRequest : that.DsFactory.dataset_result,
			renderContent : that.DsFactory.dsFieldName(),
			// renderContent: '.template_datatable',
			header : that.DsFactory.dsFieldValue(),

			search : {
				colunas : new Array(),
				enabled : true,
				onlyEnterkey : true,
				onSearch : function(res) {
					if (!res) {
						that.myTable.reload(dataInit);
					}
					var dataAll = that.myTable.getData();
					var search = dataAll.filter(function(x) {
						console.log(that);
						 
						return;

						// return 1
						// ||
						// el.usuarioMail.toUpperCase().indexOf(res.toUpperCase())
						// >= 0
						// ||
						// el.usuarioId.toUpperCase().indexOf(res.toUpperCase())
						// >= 0
						// ||
						// el.TipoOco.toUpperCase().indexOf(res.toUpperCase())
						// >= 0
						// ||
						// el.usuarioCargo.toUpperCase().indexOf(res.toUpperCase())
						// >= 0
						// ||
						// el.usuarioDpto.toUpperCase().indexOf(res.toUpperCase())
						// >= 0

					});
					if (search && search.length) {
						that.myTable.reload(search);
					} else {
						FLUIGC.toast({
							title : 'Buscando: ',
							message : 'Sem resultados',
							type : 'Sucesso'
						});
					}
				}
			},
			navButtons : {
				enabled : true,
			},
			reload : function(el, ev) {
				this.myTable.reload();
			}
		}, function(err, data) {
			if (data) {
				dataInit = data;
			} else if (err) {
				FLUIGC.toast({
					message : err,
					type : 'danger'
				});
			}
		});
	},

	// BIND de eventos
	bindings : {
		local : {
			'execute' : [ 'click_executeAction' ]
		},
		global : {}
	},

	executeAction : function(htmlElement, event) {
	}

});



/***
 * 
 * 
 * **/

