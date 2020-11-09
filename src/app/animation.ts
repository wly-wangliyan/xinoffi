import {animate, animateChild, group, query, style, transition, trigger} from '@angular/animations';

// 路由切换动画实现
function generateTransition(fromPage: string, toPage: string): any {
  return transition(`${fromPage} <=> ${toPage}`, [
    style({position: 'relative'}),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ]),
    query(':enter', [
      style({left: '-100%'})
    ], {optional: true}),
    query(':leave', animateChild(), {optional: true}),
    group([
      query(':leave', [
        animate('300ms ease-out', style({left: '100%'})),
      ], {optional: true}),
      query(':enter', [
        animate('300ms ease-out', style({left: '0%'}))
      ], {optional: true})
    ]),
    query(':enter', animateChild(), {optional: true}),
  ]);
}

function generateTransitions(pages: string[]): any[] {
  const transList = [];
  while (pages.length > 1) {
    const fromPage = pages.shift();
    pages.forEach(toPage => {
      transList.push(generateTransition(fromPage, toPage));
    });
  }
  return transList;
}

export const routerAnimation =
  trigger('routeAnimations',
    generateTransitions(['BusinessPage', 'ProgrammePage', 'CooperationPage', 'CoreProductsPage']).concat(
      generateTransitions(['BasicInfoPage', 'DevelopPage', 'EnterprisePage', 'ContactPage']))
  );
