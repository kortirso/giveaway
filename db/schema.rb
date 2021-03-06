# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180120091918) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cond_likes", force: :cascade do |t|
    t.integer "event_id"
    t.string "url", default: "", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["event_id"], name: "index_cond_likes_on_event_id"
  end

  create_table "configs", force: :cascade do |t|
    t.integer "koef_eur"
    t.integer "koef_usd"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "events", force: :cascade do |t|
    t.integer "user_id"
    t.string "name", default: "", null: false
    t.string "image"
    t.datetime "date_end"
    t.integer "count_winners", default: 1
    t.integer "count_losers", default: 0
    t.string "url"
    t.integer "price_tokens", default: 0
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "likers", default: ""
    t.index ["user_id"], name: "index_events_on_user_id"
  end

  create_table "identities", force: :cascade do |t|
    t.integer "user_id"
    t.string "uid", default: "", null: false
    t.string "provider", default: "", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_identities_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet "current_sign_in_ip"
    t.inet "last_sign_in_ip"
    t.string "username", default: "", null: false
    t.string "token", default: "", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
