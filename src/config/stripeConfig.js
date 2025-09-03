import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
    'pk_test_51RxsfeRtwnHZofJGTW8kLk9I313s8X5LEUQnRKI34ojcVTURz79XZ7Dt4iqTUFuG0Xnox35dMuIG01UKdBIQfI0A00JIURL90i'
);

export default stripePromise