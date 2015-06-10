$(function() {

// Basic //

var $tasksContainer = $('#tasks');

// Render a new task from the template
function renderTask(details) {
  var taskId = 'task-' + details.id;
  var $divTask = $('<div>', {
    'class': 'task ' + details.importance
  });
  var $input = $('<input>', {
    id: 'task-' + details.id,
    type: 'checkbox'
  });
  var $label = $('<label>', {
    'class': 'text',
    for: 'task-' + details.id,
    text: details.text
  });

  return $divTask.append($input, $label);
}

// Form action
$('#create-btn').on('click', function () {
  var text = $('#create-text').val();
  var importance = $('#create-importance').val();

  if (text.length > 0) {
    // Create template data Object
    var taskDetails = {
      id: $('.task').length + 1,
      text: text,
      importance: importance
    }

    // Get rendered template HTML
    var $newTask = renderTask(taskDetails);

    // Append task HTML to tasks container
    $tasksContainer.append($newTask);
  }
});

// Show/hide completed tasks action
$('#show-completed').on('click', function () {
  var showIsChecked = $(this).is(':checked');

  if (showIsChecked) {
    $('.task input:checked').parent().show();
  } else {
    $('.task input:checked').parent().hide();
  }
});

// Advanced //

// Task remove action
$tasksContainer.on('click', '.task .remove', function () {
  var $task = $(this).parent('.task');

  $task.remove();
});

});
