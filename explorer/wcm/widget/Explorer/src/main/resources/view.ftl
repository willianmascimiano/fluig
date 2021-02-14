<link rel="stylesheet" type="text/css" href="/style-guide/css/fluig-style-guide-filter.min.css">
<script src="/style-guide/js/fluig-style-guide-filter.min.js"></script>




<div id="ExplorerWidget_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide" data-params="ExplorerWidget.instance()">

<!-- ACESSO A DATASETS POR MEIO DA BIBLIOTECA vcXMLRPC.js -->
<script type="text/javascript" src="/webdesk/vcXMLRPC.js"></script>

<input id="filtro_dataset" type="text" name="filtro_dataset"/>
<input  type='hidden' id='config_nome_dataset' name='config_nome_dataset' />

<script type="text/template" class="template_datatable">
    <tr>
    	
        <td>{{usuarioMail}}</td>
        <td>{{usuarioId}}</td>
        <td>{{usuarioData}}</td>
        <td>{{TipoOco}}</td>
        <td>{{usuarioDpto}}</td>
        <td>{{usuarioCargo}}</td>
        <!-- td><a href="/portal/p/1/pageworkflowview?app_ecm_workflowview_detailsProcessInstanceID={{usuarioMail}}"> Abrir </a></td-->
        <td><a href="/portal/p/1/ecmnavigation?app_ecm_navigation_doc={{metadata#id}}"> Abrir </a></td> 
    </tr>
</script>

<div id="explorer_table_${instanceId}"></div>
</div>



<script type='text/javascript'>

var settings = {
	    source: {
	        url: '/api/public/ecm/dataset/search?datasetId=ds_frm_configura_explorer&',
	        contentType: 'application/json',
	        root: 'content',
	        pattern: '',
	        limit: 10,
	        offset: 0,
	        patternKey: 'pattern',
	        limitkey: 'limit',
	        offsetKey: 'offset'
	    },
	    displayKey: 'config_desc_dataset',
	    multiSelect: false,
	    style: {
	        autocompleteTagClass: 'tag-gray',
	        tableSelectedLineClass: 'info'
	    },
	    table: {
	        header: [
	            {
	                'title': 'Dataset',
	                'size': 'col-xs-3'
	            } ,
	            {
	                'title': 'Processo',
	                'size': 'col-xs-3'
	            } 
	        ],
	        renderContent: [  'config_nome_dataset', 'config_desc_dataset']
	    }
	};
	 
	var filter = FLUIGC.filter('#filtro_dataset', settings);


 filter.on('fluig.filter.item.added', function (data) {
$("#config_nome_dataset").val(filter.getSelectedItems()[0].config_nome_dataset);
var nome_dataset= $('#config_nome_dataset').val() ;
alert(nome_dataset);
ExplorerWidget_${instanceId}.loadTable();
/*    
FLUIGC.toast({
        title: 'Item selected: ',
        message: filter.getSelectedItems()[0].config_nome_dataset,
        type: 'success'
    });
*/
});
</script>

 