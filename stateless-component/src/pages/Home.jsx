import classes from '@/styles/Home.module.css';
import { Button, A11yHidden, BaseLayout } from '@/components';

export default function Home() {
  return (
    <BaseLayout>
      <div className={classes.container}>
        <h2 className={classes.headline}>Button 컴포넌트(stateless)</h2>

        <div role="group" className={classes.buttonGroup}>
          <Button>회원가입</Button>
          <Button secondary>로그인</Button>
        </div>

        <section id="snack">
          <h2>과자</h2>
          <p>
            <A11yHidden as="a" href="#invisible" focusable>
              Lorem ipsum
            </A11yHidden>
            <a href="#dolor">dolor</a>, sit amet consectetur adipisicing elit.
            Quis suscipit ratione maxime velit, distinctio cupiditate
            dignissimos fugit culpa, necessitatibus, quidem obcaecati
            perspiciatis veritatis. Atque quidem sed nisi maxime aliquid eos.
          </p>
          <p>
            Dolorem adipisci nihil et vitae possimus ipsa dolorum voluptates
            exercitationem nemo aperiam deserunt dolor aspernatur, nostrum
            expedita temporibus veniam, suscipit recusandae sint necessitatibus
            fugiat voluptatibus accusantium tempore accusamus nisi. Culpa?
          </p>
          <p>
            Expedita, rerum. Voluptatem impedit nisi numquam dolorum ad unde,
            quis illum odio voluptatibus eveniet tempora explicabo distinctio
            aliquid vel ullam beatae quos neque laudantium esse voluptatum
            minima deleniti voluptate. Libero.
          </p>
          <p>
            Quam ipsam repellendus magnam repellat cumque. Dolores sit, quisquam
            a ex error eos. Ducimus pariatur eaque officiis, debitis quo
            inventore doloremque fugit iste rem necessitatibus! A possimus
            quidem quae nam?
          </p>
          <p>
            Saepe nisi sit odio sapiente obcaecati recusandae perspiciatis eos
            quis architecto blanditiis dicta quae mollitia culpa, suscipit esse
            molestiae, dolore veniam fugit ex vero ipsum fugiat hic aperiam.
            Vero, ullam!
          </p>
          <p>
            Cumque similique unde quos sequi nulla? Placeat aperiam blanditiis
            doloribus excepturi iste obcaecati voluptatem, optio repellendus
            quidem sint, assumenda quisquam provident ab dolore ex eaque. Id,
            repudiandae. Corrupti, adipisci unde.
          </p>
        </section>
        <section id="pumpkin">
          <h2>호박</h2>
          <p>
            <A11yHidden as="a" href="#invisible" focusable>
              Lorem ipsum
            </A11yHidden>
            <a href="#dolor">dolor</a>, sit amet consectetur adipisicing elit.
            Quis suscipit ratione maxime velit, distinctio cupiditate
            dignissimos fugit culpa, necessitatibus, quidem obcaecati
            perspiciatis veritatis. Atque quidem sed nisi maxime aliquid eos.
          </p>
          <p>
            Dolorem adipisci nihil et vitae possimus ipsa dolorum voluptates
            exercitationem nemo aperiam deserunt dolor aspernatur, nostrum
            expedita temporibus veniam, suscipit recusandae sint necessitatibus
            fugiat voluptatibus accusantium tempore accusamus nisi. Culpa?
          </p>
          <p>
            Expedita, rerum. Voluptatem impedit nisi numquam dolorum ad unde,
            quis illum odio voluptatibus eveniet tempora explicabo distinctio
            aliquid vel ullam beatae quos neque laudantium esse voluptatum
            minima deleniti voluptate. Libero.
          </p>
          <p>
            Quam ipsam repellendus magnam repellat cumque. Dolores sit, quisquam
            a ex error eos. Ducimus pariatur eaque officiis, debitis quo
            inventore doloremque fugit iste rem necessitatibus! A possimus
            quidem quae nam?
          </p>
          <p>
            Saepe nisi sit odio sapiente obcaecati recusandae perspiciatis eos
            quis architecto blanditiis dicta quae mollitia culpa, suscipit esse
            molestiae, dolore veniam fugit ex vero ipsum fugiat hic aperiam.
            Vero, ullam!
          </p>
          <p>
            Cumque similique unde quos sequi nulla? Placeat aperiam blanditiis
            doloribus excepturi iste obcaecati voluptatem, optio repellendus
            quidem sint, assumenda quisquam provident ab dolore ex eaque. Id,
            repudiandae. Corrupti, adipisci unde.
          </p>
        </section>
        <section id="icecream">
          <A11yHidden as="h2" focusable>
            맛있는 과자~
          </A11yHidden>
          <strong>아이스크림</strong>
          <p>
            <A11yHidden as="a" href="#invisible" focusable>
              Lorem ipsum
            </A11yHidden>
            <a href="#dolor">dolor</a>, sit amet consectetur adipisicing elit.
            Quis suscipit ratione maxime velit, distinctio cupiditate
            dignissimos fugit culpa, necessitatibus, quidem obcaecati
            perspiciatis veritatis. Atque quidem sed nisi maxime aliquid eos.
          </p>
          <p>
            Dolorem adipisci nihil et vitae possimus ipsa dolorum voluptates
            exercitationem nemo aperiam deserunt dolor aspernatur, nostrum
            expedita temporibus veniam, suscipit recusandae sint necessitatibus
            fugiat voluptatibus accusantium tempore accusamus nisi. Culpa?
          </p>
          <p>
            Expedita, rerum. Voluptatem impedit nisi numquam dolorum ad unde,
            quis illum odio voluptatibus eveniet tempora explicabo distinctio
            aliquid vel ullam beatae quos neque laudantium esse voluptatum
            minima deleniti voluptate. Libero.
          </p>
          <p>
            Quam ipsam repellendus magnam repellat cumque. Dolores sit, quisquam
            a ex error eos. Ducimus pariatur eaque officiis, debitis quo
            inventore doloremque fugit iste rem necessitatibus! A possimus
            quidem quae nam?
          </p>
          <p>
            Saepe nisi sit odio sapiente obcaecati recusandae perspiciatis eos
            quis architecto blanditiis dicta quae mollitia culpa, suscipit esse
            molestiae, dolore veniam fugit ex vero ipsum fugiat hic aperiam.
            Vero, ullam!
          </p>
          <p>
            Cumque similique unde quos sequi nulla? Placeat aperiam blanditiis
            doloribus excepturi iste obcaecati voluptatem, optio repellendus
            quidem sint, assumenda quisquam provident ab dolore ex eaque. Id,
            repudiandae. Corrupti, adipisci unde.
          </p>
        </section>
      </div>
    </BaseLayout>
  );
}
