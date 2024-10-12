import { createRouter, createWebHistory } from 'vue-router';
import CalendarIndex from '@/components/calendar/CalendarIndex.vue'; // Ensure correct casing
import EventList from '@/components/Event/EventList.vue';
import CreateEvent from '@/components/Event/createEvent.vue';
import NotificationList from '@/components/NotificationList/NotificationList.vue';
import Settings from '@/components/util/AppSettings.vue';
import ShowEvent from '@/components/Event/ShowEvent.vue';

const routes = [
  { path: '/calendar', name: 'calendar', component: CalendarIndex },
  { path: '/events', name: 'events', component: EventList },
  { path: '/create', name: 'CreateEvent', component: CreateEvent },
  { path: '/notifications', name: 'NotificationList', component: NotificationList },
  { path: '/settings', name: 'settings', component: Settings },
  { path: '/events/:eventId', name: 'ShowEvent', component: ShowEvent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
