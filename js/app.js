/**
 * Enhanced Task Manager Application
 * Built with AngularJS
 */

angular.module('taskApp', [])
.controller('TaskController', ['$scope', '$interval', function($scope, $interval) {
    
    // Initialize variables
    $scope.tasks = [];
    $scope.newTask = {
        text: '',
        priority: 'medium',
        dueDate: null,
        estimatedTime: null,
        attachments: []
    };
    $scope.filter = 'all';
    $scope.nextId = 1;

    // Timer intervals for each task
    var timerIntervals = {};

    /**
     * Reset timer for a task
     * @param {Object} task - Task to reset timer for
     */
    $scope.resetTimer = function(task) {
        if (task.timerRunning) {
            $scope.stopTimer(task);
        }
        task.currentSession = 0;
    };

    /**
     * Utility Functions
     */

    /**
     * Format time in readable format
     * @param {number} seconds - Time in seconds
     * @returns {string} Formatted time string
     */
    $scope.formatTime = function(seconds) {
        if (!seconds) return '00:00';
        var hours = Math.floor(seconds / 3600);
        var mins = Math.floor((seconds % 3600) / 60);
        var secs = seconds % 60;
        
        if (hours > 0) {
            return hours + 'h ' + mins + 'm ' + secs + 's';
        } else if (mins > 0) {
            return mins + 'm ' + secs + 's';
        } else {
            return secs + 's';
        }
    };

    /**
     * Format date in readable format
     * @param {string} dateString - Date string to format
     * @returns {string} Formatted date string
     */
    $scope.formatDate = function(dateString) {
        if (!dateString) return '';
        var date = new Date(dateString);
        return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    };

    /**
     * Check if task is overdue
     * @param {Object} task - Task to check
     * @returns {boolean} True if task is overdue
     */
    $scope.isOverdue = function(task) {
        if (!task.dueDate || task.completed) return false;
        return new Date(task.dueDate) < new Date();
    };

    /**
     * Download file (placeholder function)
     * @param {Object} file - File to download
     */
    $scope.downloadFile = function(file) {
        // In a real application, you would implement file download logic here
        alert('Download functionality would be implemented here for: ' + file.name);
    };

    /**
     * Filter Functions
     */

    /**
     * Set filter type
     * @param {string} filter - Filter type to set
     */
    $scope.setFilter = function(filter) {
        $scope.filter = filter;
    };

    /**
     * Get filtered tasks based on current filter
     * @returns {Array} Filtered tasks array
     */
    $scope.getFilteredTasks = function() {
        var filtered = $scope.tasks;
        
        switch ($scope.filter) {
            case 'completed':
                filtered = $scope.tasks.filter(function(task) {
                    return task.completed;
                });
                break;
            case 'pending':
                filtered = $scope.tasks.filter(function(task) {
                    return !task.completed;
                });
                break;
            case 'high':
                filtered = $scope.tasks.filter(function(task) {
                    return task.priority === 'high';
                });
                break;
            case 'overdue':
                filtered = $scope.tasks.filter(function(task) {
                    return $scope.isOverdue(task);
                });
                break;
            default:
                filtered = $scope.tasks;
        }
        
        return filtered;
    };

    /**
     * Statistics Functions
     */

    /**
     * Get total number of tasks
     * @returns {number} Total tasks count
     */
    $scope.getTotalTasks = function() {
        return $scope.tasks.length;
    };

    /**
     * Get number of completed tasks
     * @returns {number} Completed tasks count
     */
    $scope.getCompletedTasks = function() {
        return $scope.tasks.filter(function(task) {
            return task.completed;
        }).length;
    };

    /**
     * Get number of pending tasks
     * @returns {number} Pending tasks count
     */
    $scope.getPendingTasks = function() {
        return $scope.tasks.filter(function(task) {
            return !task.completed;
        }).length;
    };

    /**
     * Get number of high priority tasks that are not completed
     * @returns {number} High priority pending tasks count
     */
    $scope.getHighPriorityTasks = function() {
        return $scope.tasks.filter(function(task) {
            return task.priority === 'high' && !task.completed;
        }).length;
    };

    /**
     * Cleanup function - stop all timers when controller is destroyed
     */
    $scope.$on('$destroy', function() {
        for (var taskId in timerIntervals) {
            $interval.cancel(timerIntervals[taskId]);
        }
    });

    /**
     * Sample Data for demonstration
     */
    $scope.tasks = [
        {
            id: 1,
            text: 'Review project proposal',
            priority: 'high',
            dueDate: new Date(Date.now() + 86400000).toISOString().slice(0, 16), // Tomorrow
            estimatedTime: 2,
            attachments: [
                { name: 'proposal.pdf', size: 1024000, type: 'application/pdf' },
                { name: 'budget.xlsx', size: 512000, type: 'application/vnd.ms-excel' }
            ],
            completed: false,
            editing: false,
            editText: '',
            timeSpent: 3600, // 1 hour
            currentSession: 0,
            timerRunning: false,
            createdAt: new Date(Date.now() - 86400000) // Yesterday
        },
        {
            id: 2,
            text: 'Update website content',
            priority: 'medium',
            dueDate: new Date(Date.now() + 172800000).toISOString().slice(0, 16), // Day after tomorrow
            estimatedTime: 3,
            attachments: [
                { name: 'content-guidelines.docx', size: 256000, type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' }
            ],
            completed: false,
            editing: false,
            editText: '',
            timeSpent: 1800, // 30 minutes
            currentSession: 0,
            timerRunning: false,
            createdAt: new Date(Date.now() - 43200000) // 12 hours ago
        },
        {
            id: 3,
            text: 'Team meeting preparation',
            priority: 'low',
            dueDate: null,
            estimatedTime: 1,
            attachments: [],
            completed: true,
            editing: false,
            editText: '',
            timeSpent: 2700, // 45 minutes
            currentSession: 0,
            timerRunning: false,
            createdAt: new Date(Date.now() - 172800000), // 2 days ago
            completedAt: new Date(Date.now() - 86400000) // Yesterday
        },
        {
            id: 4,
            text: 'Fix critical bug in payment system',
            priority: 'high',
            dueDate: new Date(Date.now() - 3600000).toISOString().slice(0, 16), // 1 hour ago (overdue)
            estimatedTime: 4,
            attachments: [
                { name: 'error-logs.txt', size: 128000, type: 'text/plain' },
                { name: 'system-diagram.png', size: 1536000, type: 'image/png' }
            ],
            completed: false,
            editing: false,
            editText: '',
            timeSpent: 7200, // 2 hours
            currentSession: 0,
            timerRunning: false,
            createdAt: new Date(Date.now() - 259200000) // 3 days ago
        }
    ];
    $scope.nextId = 5;

    /**
     * Initialize new task object
     */
    $scope.resetNewTask = function() {
        $scope.newTask = {
            text: '',
            priority: 'medium',
            dueDate: null,
            estimatedTime: null,
            attachments: []
        };
    };

    /**
     * Handle file upload
     * @param {FileList} files - Selected files
     */
    $scope.handleFileUpload = function(files) {
        if (files && files.length > 0) {
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                $scope.newTask.attachments.push({
                    name: file.name,
                    size: file.size,
                    type: file.type,
                    data: file // In a real app, you'd upload this to a server
                });
            }
            $scope.$apply();
        }
    };

    /**
     * Remove attachment from new task
     * @param {number} index - Index of attachment to remove
     */
    $scope.removeAttachment = function(index) {
        $scope.newTask.attachments.splice(index, 1);
    };

    /**
     * Add a new task
     */
    $scope.addTask = function() {
        if ($scope.newTask.text.trim()) {
            var task = {
                id: $scope.nextId++,
                text: $scope.newTask.text.trim(),
                priority: $scope.newTask.priority,
                dueDate: $scope.newTask.dueDate,
                estimatedTime: $scope.newTask.estimatedTime,
                attachments: angular.copy($scope.newTask.attachments),
                completed: false,
                editing: false,
                editText: '',
                timeSpent: 0,
                currentSession: 0,
                timerRunning: false,
                createdAt: new Date()
            };
            $scope.tasks.push(task);
            $scope.resetNewTask();
            
            // Clear file input
            var fileInput = document.getElementById('file-upload');
            if (fileInput) {
                fileInput.value = '';
            }
        }
    };

    /**
     * Delete a task
     * @param {Object} task - Task to delete
     */
    $scope.deleteTask = function(task) {
        if (task.timerRunning) {
            $scope.stopTimer(task);
        }
        var index = $scope.tasks.indexOf(task);
        if (index > -1) {
            $scope.tasks.splice(index, 1);
        }
    };

    /**
     * Toggle task completion status
     * @param {Object} task - Task to toggle
     */
    $scope.toggleComplete = function(task) {
        if (task.timerRunning) {
            $scope.stopTimer(task);
        }
        task.completed = !task.completed;
        if (task.completed) {
            task.completedAt = new Date();
        }
    };

    /**
     * Start editing a task
     * @param {Object} task - Task to edit
     */
    $scope.editTask = function(task) {
        task.editing = true;
        task.editText = task.text;
    };

    /**
     * Save edited task
     * @param {Object} task - Task to save
     */
    $scope.saveTask = function(task) {
        if (task.editText.trim()) {
            task.text = task.editText.trim();
        }
        task.editing = false;
        task.editText = '';
    };

    /**
     * Timer Functions
     */

    /**
     * Toggle timer for a task
     * @param {Object} task - Task to toggle timer for
     */
    $scope.toggleTimer = function(task) {
        if (task.timerRunning) {
            $scope.stopTimer(task);
        } else {
            $scope.startTimer(task);
        }
    };

    /**
     * Start timer for a task
     * @param {Object} task - Task to start timer for
     */
    $scope.startTimer = function(task) {
        task.timerRunning = true;
        timerIntervals[task.id] = $interval(function() {
            task.currentSession++;
        }, 1000);
    };

    /**
     * Stop timer for a task
     * @param {Object} task - Task to stop timer for
     */
    $scope.stopTimer = function(task) {
        task.timerRunning = false;
        if (timerIntervals[task.id]) {
            $interval.cancel(timerIntervals[task.id]);
            delete timerIntervals[task.id];
        }
        task.timeSpent += task.currentSession;
        task.currentSession = 0;
    };

}]);