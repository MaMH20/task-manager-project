import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit() {
  }
  createTask(title: string) {
    this.taskService.createTasks(title).subscribe((response: any) => {
      this.router.navigate(['../'], { relativeTo: this.route });
    })
  }

}

