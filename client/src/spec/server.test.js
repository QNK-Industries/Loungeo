import { rest } from 'msw';
import { setupServer } from 'msw/node';
import '@testing-library/jest-dom';

const server = setupServer(

  rest.get('/products/:id', (req, res, ctx) => res(
    ctx.status(200);
    ctx.json({
      id: 61579,
      campus: 'hr-sfo',
      name: 'Heir Force Ones',
      slogan: 'A sneaker dynasty',
      description: 'Now where da boxes where I keep mine? You should peep mine, maybe once or twice but never three times. I\'m just a sneaker pro, I love Pumas and shell toes, but can\'t nothin compare to a fresh crispy white pearl',
      category: 'Kicks',
      default_price: '99.00',
      created_at: '2021-10-28T19:58:54.904Z',
      updated_at: '2021-10-28T19:58:54.904Z',
      features: [
        {
          feature: 'Sole',
          value: 'Rubber',
        },
        {
          feature: 'Material',
          value: 'FullControlSkin',
        },
        {
          feature: 'Mid-Sole',
          value: 'ControlSupport Arch Bridge',
        },
        {
          feature: 'Stitching',
          value: 'Double Stitch',
        },
      ],
    };

    )
  ));

  //
);