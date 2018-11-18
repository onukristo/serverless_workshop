let initialized = false

const init = async () => {
    if (initialized) {
        return
    }

    process.env.restaurants_api   = "https://xhboa2s9bk.execute-api.eu-west-1.amazonaws.com/dev/restaurants"
    process.env.restaurants_table = "restaurants-dev-kristo"
    process.env.AWS_REGION        = "eu-west-1"
    process.env.restaurant_notification_topic = 'restaurants-dev-kristo'
    process.env.TEST_ROOT = "https://xhboa2s9bk.execute-api.eu-west-1.amazonaws.com/dev"

    initialized = true
}

module.exports = {
    init
}