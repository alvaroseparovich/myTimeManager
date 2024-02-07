import { v4 as uuidv4 } from 'uuid';

class SpendingTime {
  /**
   * 
   * @param {Project} project 
   * @param {Date} startTime 
   * @param {Date | null} endTime 
   */
  constructor (project, startTime = Date.now(), endTime = null) {
    this.id = uuidv4();
    this.project = project;
    this.startTime = startTime;
    this.endTime = endTime;
  }

  stop() {
    this.endTime = Date.now();
  }

  getDuration() {
    return this.endTime - this.startTime;
  }

  registerTimeOnProject() {
    this.project.registerTime(new TimeSpentDTO(this.id, this.project.name, this.getDuration()));
  }
}

class Project {
  constructor(name) {
    this.id = uuidv4();
    this.name = name;
    this.timeSpent = 0;
    this.timeSpentRegistry = {};
  }

  registerTime(timeSpentDTO) {
    this.timeSpent += timeSpentDTO.time;
    this.timeSpentRegistry[timeSpentDTO.id] = timeSpentDTO;
  }
}

class TimeSpentDTO{
  constructor(id, projectName, timeSpent){
    this.id = id;
    this.projectName = projectName;
    this.timeSpent = timeSpent;
  }
}