(function (factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else {
    factory(jQuery);
  }
}(function ($) {
			
	var TipBox = function () {

	}

	TipBox.defaults = {
		//控件标题
		title: '',

		//控件内容
		content: '',

		//是否有关闭按钮,默认有
		close: true,

		//控件的默认宽度
		width: 400,

		//是否有遮罩层
		mask: true,

		
	}

	return TipBox;
}));