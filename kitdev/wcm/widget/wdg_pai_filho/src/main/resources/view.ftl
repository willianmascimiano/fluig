	<link type="text/css" rel="stylesheet" href="/style-guide/css/fluig-style-guide.min.css"/>
	<script type="text/javascript" src="/portal/resources/js/jquery/jquery.js"></script>
	<script type="text/javascript" src="/portal/resources/js/jquery/jquery-ui.min.js"></script>
	<script type="text/javascript" src="/portal/resources/js/mustache/mustache-min.js"></script>
	<script type="text/javascript" src="/style-guide/js/fluig-style-guide.min.js" charset="utf-8"></script>
	
	
<div id="HelloWorld_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide"
     data-params="HelloWorld.instance({message: 'Hello world'})">

    <!-- efetua a tradução do texto do objeto i18n -->	
    <h1>${i18n.getTranslation('hello.example.hello')}</h1>

    <div>
        <button type="button" class="btn btn-default" data-show-message>${i18n.getTranslation('hello.button.showMessage')}</button>
    </div>

    <div id='helloMessage_${instanceId}'>
    </div>
    
    
    

</div>


<table border="1" tablename="minha_tabela" addbuttonlabel="Adicionar Filho"  nodeletebutton="true">
    <thead>
        <tr>
            <td><b>Nome</b></td>
            <td><b>Telefone</b></td>
             
        </tr>
    </thead>
    <tr>
        <td><input type="text" name="txt_nome"></td>
        <td><input type="text" name="txt_telefone"></td> 
    </tr>
</table>
<button type="button" class="btn btn-primary"
								onclick="wdkAddChild('minha_tabela');MaskEvent.init();">Incluir
								Registros</button>