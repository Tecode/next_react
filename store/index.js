import appStore from './appStore';

export const initializeStore = () => (
  {
    homeStore: { name: 'Mobx', age: '12' },
    appStore
  }
);