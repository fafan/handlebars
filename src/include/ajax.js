module.exports = function getDataByAPI(request, callback) {
	$(function($){
		$.ajax({
			url: request.api.baseurl + request.api.root + request.api.function,
			type: request.method,
			data: request.params,
			beforeSend: function (xhr) {
				xhr.setRequestHeader('Authorization', 'Bearer ' + request.token)
			},
			success: function (data) {
				if (callback) callback(true, data)
			},
			error: function (jqXHR, textStatus, errorThrown) {
				if (callback) callback(false, [jqXHR, textStatus, errorThrown])
			}
		})
	})
}
