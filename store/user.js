export default {
  state: {
    userData: {
      link: '/img/users/user1.png',
      name: 'Виталя'
    },
    users: [
      {
        brand: {
          name: 'Nike',
          logoLink: '/img/icons/companies/nike.png'
        },
        status: 'active',
        productImg: ['/img/products/sneaker-2.jpg'],
        title: 'Опубликовать сторис в Инстаграм со словами “Just Do It”',
        gift: '10% скидка в интернет-магазине',
        newSms: ['рассказываю', 'шутку', ':встрелись однажды', 'армянин', 'саша', 'и табасранец'],
        newBid: [],
        dropDate: '2021-05-30',
        numDone: 12
      },
      {
        brand: {
          name: 'Nike',
          logoLink: '/img/icons/companies/nike.png'
        },
        status: 'moderation',
        productImg: ['/img/products/sneaker-2.jpg'],
        title: 'Опубликовать сторис в Инстаграм со словами “Just Do It”. понял, ле, ваци?',
        gift: '10% скидка в интернет-магазине',
        newSms: ['рассказываю', 'шутку', ':встрелись однажды', 'армянин', 'саша', 'и табасранец'],
        newBid: [],
        dropDate: '2021-05-30',
        numDone: 12
      },
      {
        brand: {
          name: 'Nike',
          logoLink: '/img/icons/companies/nike.png'
        },
        status: 'active',
        productImg: ['/img/products/sneaker-1.jpg', '/img/products/sneaker-1.webp'],
        title: 'Записать сторис в кросcовках Nike Air Max 7202',
        gift: 'Репост строис в официальном аккаунте NikeRussia2',
        newSms: ['привет', 'чурбан', 'птичка съела', 'ночь'],
        newBid: [
          {
            link: '/img/users/user1.png',
            name: 'Виталя'
          },
          {
            link: '/img/users/user2.png',
            name: 'Семен'
          },
          {
            link: '/img/users/user3.png',
            name: 'Пеоя'
          },
          {
            link: '/img/users/user4.png',
            name: 'ываыва'
          },
          {
            link: '/img/users/user1.png',
            name: 'пвапвып'
          },
          {
            link: '/img/users/user2.png',
            name: 'ываыва'
          },
          {
            link: '/img/users/user3.png',
            name: 'ываыапываы'
          },
          {
            link: '/img/users/user4.png',
            name: 'ыаывв'
          }
        ],
        dropDate: '2021-09-30',
        numDone: 250
      }
    ],
    timeLeft: null,
    dropDate: null
  },
  mutations: {
    DROP_DATE_CHANGE (state, payload) {
      state.dropDate = payload
    },
    ITEM_LEFT_CHANGE (state, payload) {
      state.timeLeft = payload
    }
  },
  actions: {
    timer ({ state, commit, getters }, payload) {
      commit('DROP_DATE_CHANGE', payload)
      function getTimeRemaining (dropDate) {
        return Date.parse(dropDate) - Date.parse(new Date())
      }

      function setClock (dropDate) {
        const timeInterval = setInterval(updateClock, 1000)

        updateClock()

        function updateClock () {
          const res = getTimeRemaining(state.dropDate)
          commit('ITEM_LEFT_CHANGE', res)

          if (state.timeLeft <= 0) {
            clearInterval(timeInterval)
          }
        }
        return state.timeLeft
      }

      return setClock(state.dropDate)
    }
  },
  getters: {
    active: state => state.users.filter(user => user.status === 'active'),
    timeLeft: state => state.timeLeft
  }
}
