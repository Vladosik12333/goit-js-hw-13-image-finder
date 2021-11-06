import './sass/main.scss';

async function f() {
  await setTimeout(() => console.log('async hi!'), 1000);

  console.log('Async ready');
}

f();
