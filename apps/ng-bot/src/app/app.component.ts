import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TaskModel } from '@doitbig/data/models';
import { Tasks } from '@doitbig/data/static';

@Component({
  standalone: true,
  imports: [RouterModule, CommonModule],
  selector: 'ng-bot-root',
  templateUrl: './app.component.html',
  host: {
    class: 'block h-full'
  }
})
export class AppComponent {
  title = 'ng-bot';

  tasks = Tasks;

  completedTasks: TaskModel[] = [
    {
      title: 'task 5',
      completed: false,
    },
    {
      title: 'task 6',
      completed: false,
    },
    {
      title: 'task 7',
      completed: false,
    },
    {
      title: 'task 8',
      completed: false,
    },
  ];

  
  addTask(description: string) {
    this.tasks.push({
      title: description,
      completed: false,
    });
  }

  deleteTask(task: TaskModel) {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }
}
