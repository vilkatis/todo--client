import { Component, Input, OnDestroy } from '@angular/core';
import { ITask } from '../../../models';
import { AbstractComponent } from '../../../helpers';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-task',
  templateUrl: 'task.component.html',
  styleUrls: ['task.component.scss']
})

export class TaskComponent extends AbstractComponent implements OnDestroy {
  @Input() listId: string;
  @Input()
  get task(): ITask {
    return this._task;
  }

  set task(task: ITask) {
    if (task) {

      task.name && this.taskNameControl.setValue(task.name, {emitEvent: false});
      this.taskIsCompletedControl.setValue(task.isCompleted, {emitEvent: false});
      task.isCompleted ? this.taskNameControl.disable() : this.taskNameControl.enable();
    }
    this._task = task;
  }
  taskNameControl: FormControl;
  taskIsCompletedControl: FormControl;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private fb: FormBuilder) {
    super();
    this.taskNameControl = fb.control('', Validators.required);
    this.taskIsCompletedControl = fb.control(false);
    this.taskNameControl.valueChanges.pipe(
      takeUntil(this.destroy$),
      debounceTime(500),
      distinctUntilChanged(),
      tap((newValue: string) => this.updateTask({...this.task, name: newValue}))
    ).subscribe();
    this.taskIsCompletedControl.valueChanges.pipe(
      takeUntil(this.destroy$),
      debounceTime(500),
      distinctUntilChanged(),
      tap((newValue: boolean) => this.updateTask({...this.task, isCompleted: newValue}))
    ).subscribe();
  }

  private _task: ITask;

  updateTask(task: ITask) {
    this.fireEvent.emit({
      type: 'task',
      action: {
        type: 'update',
        payload: {listId: this.listId, task}
      }
    })
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  handleClickTrash() {
    const userConfirmation: boolean = confirm('Are you sure you want to delete this task?');
    if (userConfirmation) {
      this.fireEvent.emit({
        type: 'task',
        action: {
          type: 'delete',
          payload: {listId: this.listId, taskId: this._task.id}
        }
      });
    }
  }
}
