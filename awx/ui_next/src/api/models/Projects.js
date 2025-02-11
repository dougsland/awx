import Base from '../Base';
import NotificationsMixin from '../mixins/Notifications.mixin';
import LaunchUpdateMixin from '../mixins/LaunchUpdate.mixin';

class Projects extends LaunchUpdateMixin(NotificationsMixin(Base)) {
  constructor(http) {
    super(http);
    this.baseUrl = '/api/v2/projects/';

    this.readPlaybooks = this.readPlaybooks.bind(this);
    this.readSync = this.readSync.bind(this);
    this.sync = this.sync.bind(this);
  }

  readPlaybooks(id) {
    return this.http.get(`${this.baseUrl}${id}/playbooks/`);
  }

  readSync(id) {
    return this.http.get(`${this.baseUrl}${id}/update/`);
  }

  sync(id) {
    return this.http.post(`${this.baseUrl}${id}/update/`);
  }
}

export default Projects;
