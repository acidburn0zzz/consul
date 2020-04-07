export default function(visitable, clickable, attribute, collection, page, filter) {
  const service = {
    name: attribute('data-test-service'),
    service: clickable('a'),
    externalSource: attribute('data-test-external-source', '[data-test-external-source]'),
  };
  return {
    visit: visitable('/:dc/services'),
    services: collection('[data-test-service]', service),
    dcs: collection('[data-test-datacenter-picker]', {
      name: clickable('a'),
    }),
    navigation: page.navigation,
    filter: filter,
    home: clickable('[data-test-home]'),
  };
}
