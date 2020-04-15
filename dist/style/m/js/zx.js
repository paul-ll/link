function errorTip(msg , type){
	switch(type)
	{
	   case 'success':
		 humane.success(msg);
	   break;
	
	   case 'error':
		 humane.error(msg);
	   break;
	   case 'log':
		 humane.log(msg);
	   break;
	   case 'info':
		 humane.info(msg);
	   break;
	}
}