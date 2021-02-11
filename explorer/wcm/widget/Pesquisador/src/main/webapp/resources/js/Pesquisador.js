var MyWidget = SuperWidget.extend({
    //variáveis da widget
    variavelNumerica: null,
    variavelCaracter: null,
    myTable: null,
    dataInit: null,
    
    
    param_dataset : null,
    

    //método iniciado quando a widget é carregada
    init: function() {
    	
    		 
    	//this.loadTable();
    },
    
    
    datasetName : function(){
    	return document.getElementById("config_nome_dataset").value;
    	
    },
    dataset : function(){
    	return DatasetFactory.getDataset(this.datasetName(), null,null,null).values;
    },
    
    getCabecalho : function(){
    	
    	var cabecalho = new Array();
    	
    	var r = DatasetFactory.getDataset("DSConfiguraBuscadorItem", [this.datasetName()], null).values; 

    	cabecalho = new Array();
    	cabecalhoList = new Array();

    	for(i=0;i<=r.length-1;i++){ 
    		 
    		cabecalhoList.push([r[i]['config_campo'],r[i]['config_nome']]);
    		 
    	} ;
    	
    	return cabecalhoList;
    },
    
    //Retorna o nome de exibição da tabela
    getCabecalhoCampo : function(){
    	var cabecalho = new Array();
    	var cabecalhoList = new Array();
    	
    	cabecalho = this.getCabecalho();
    	
    	for(i=0;i<=cabecalho.length-1;i++){
    		cabecalhoList.push({"title" : cabecalho[i][1]});
    	}
    	return cabecalhoList;
    	
    },
    
    //Retorna o nome do campo
    getCabecalhoNome : function(){
    	var cabecalho = new Array();
    	var cabecalhoList = new Array();
    	
    	cabecalho = this.getCabecalho();
    	
    	for(i=0;i<=cabecalho.length-1;i++){
    		cabecalhoList.push(cabecalho[i][0]);
    	}
    	
    	return cabecalhoList;
    	
    },

    loadTable: function() {
    
   	var that = this;
   	that.myTable = FLUIGC.datatable('#idtable_'+that.instanceId, {
   		//Dataset de exemplo
   		dataRequest:  this.dataset(),
   		//renderContent: ['usuarioMail', 'usuarioId', 'usuarioData', 'TipoOco', 'usuarioDpto','usuarioCargo'],
   		renderContent: this.getCabecalhoNome(),
   		//renderContent: '.template_datatable',
   		header :
   		          this.getCabecalhoCampo()
   		          ,
   		
   		          
   		consulta : function(){
   			
   		},
   		search: {
   			colunas : new Array(),
   			enabled: true,
   			onlyEnterkey: true,
   			onSearch: function(res) {
   				if (!res) {
   					that.myTable.reload(dataInit);
   				}
   				var dataAll = that.myTable.getData();
   				var search = dataAll.filter(function(x) {
   					console.log(that);
//   					//var cabecalhoNome = that.myTable.getCabecalhoCampoNome(); 
//   					console.log(x);
//   					for(i=0;i<=x.length-1;i++){
//   						if(x.x[i].toUpperCase().indexOf(res.toUpperCase()) >= 0)
//   							return x.x[i].toUpperCase().indexOf(res.toUpperCase()) >= 0
//   					}
   					return;
   					
//   					return 1
//   					|| el.usuarioMail.toUpperCase().indexOf(res.toUpperCase()) >= 0
//   					|| el.usuarioId.toUpperCase().indexOf(res.toUpperCase()) >= 0
//   					|| el.TipoOco.toUpperCase().indexOf(res.toUpperCase()) >= 0
//   					|| el.usuarioCargo.toUpperCase().indexOf(res.toUpperCase()) >= 0
//   					|| el.usuarioDpto.toUpperCase().indexOf(res.toUpperCase()) >= 0
   			
   					 
   				});
   				if (search && search.length) {
   					that.myTable.reload(search);
   				} else {
   					FLUIGC.toast({
   						title: 'Buscando: ',
   						message: 'Sem resultados',
   						type: 'Sucesso'
   					});
   				}
   			}
   		},
   		navButtons: {
   			enabled: true,
   		},
   		reload: function(el, ev) {
   		    this.myTable.reload();
   		}
   	}, function(err, data) {
   		if(data) {
   			dataInit = data;
   		}
   		else if (err) {
   			FLUIGC.toast({
   				message: err,
   				type: 'danger'
   			});
   		}
   	});
   },
   	
  
    //BIND de eventos
    bindings: {
        local: {
            'execute': ['click_executeAction']
        },
        global: {}
    },
 
    executeAction: function(htmlElement, event) {
    } 
    
    
    

});


 