<script setup lang="ts">

</script>

<template>
  <footer class="footer">
      <div class="footer__wrapper container">
        <ul class="footer__links">
          <li>
            <router-link :to="{ name: 'catalog' }" class="footer__link">
              Каталог
            </router-link>
          </li>
          <li>
            <a class="footer__link" href="tel:88005555555">
                8 800 555 55 55
            </a>
          </li>
          <li>
            <a class="footer__link" href="mailto:hi@technozavrrr.com">
                hi@technozavrrr.com
            </a>
          </li>
          <li>
            <a class="footer__link" href="#">
                Распродажа
            </a>
          </li>
          <li>
            <a class="footer__link footer__link--medium" href="#">
                Заказать звонок
            </a>
          </li>
        </ul>

        <ul class="footer__social social">
          <li class="social__item">
            <a class="social__link" href="#">
              <img src="@/assets/images/svg/footer/vk.svg" alt="Вконтакте" width="20" height="11">
            </a>
          </li>
          <li class="social__item">
            <a class="social__link" href="#" aria-label="Telegram">
              <img src="@/assets/images/svg/footer/telegram.svg" alt="Telegram" width="19" height="17">
            </a>
          </li>
        </ul>

        <p class="footer__desc">
          Все права на&nbsp;материалы, находящиеся на&nbsp;сайте, охраняются в&nbsp;соответствии с&nbsp;законодательством&nbsp;РФ,
          в&nbsp;том числе об&nbsp;авторском праве и&nbsp;смежных правах.
        </p>

        <ul class="footer__data">
          <li>
            <a class="footer__link" href="#">
              Политика конфиденциальности
            </a>
          </li>
          <li>
            <a class="footer__link" href="#" target="_blank" rel="noopener" type="application/pdf">
              Публичная оферта
            </a>
          </li>
        </ul>

        <span class="footer__copyright">
        © 2023 Технозавррр
      </span>
    </div>
  </footer>
</template>