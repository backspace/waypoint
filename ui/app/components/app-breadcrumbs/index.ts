import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import BreadcrumbsService from 'waypoint/services/breadcrumbs';

export default class AppBreadcrumbs extends Component {
  @service breadcrumbs!: BreadcrumbsService;
}
