# API Integration

This document describes how the RentNest frontend integrates with the backend APIs.

---

# Authentication

| ------------------ | ----------------------------------- |
| Login Page | POST | `/auth/login` | Authenticate user and set HttpOnly cookie |
| Register Page | POST | `/auth/register` | Create a new account |
| Navbar/Layout | GET | `/auth/me` | Get logged-in user information |

---

---

# Properties

| ------------------ | ----------------------------------- |
| Properties Page | GET | `/landlord/properties` | Fetch all properties |
| Property Details | GET | `/landlord/properties/:id` | Fetch single property |
| Add Property (Landlord) | POST | `/landlord/properties` | Create a property |
| Edit Property | PATCH | `landlord/properties/:id` | Update property |
| Delete Property | DELETE | `/landlord/properties/:id` | Delete property |

---

# Rental Requests

| ------------------ | ----------------------------------- |
| Tenant Request | POST | `/rentals` | Submit rental request |
| Landlord Requests | GET | `/landlord/properties/requests` | View all rental requests |
| Update Request Status | PATCH | `/landlord/properties/requests/:id` | Approve/Reject request |

---

# Payments

| ------------------ | ----------------------------------- |
| Payment Page | POST | `/payments/checkout` | Create Stripe/SSLCommerz payment session |
| Payment Success | GET | `/payments/success` | Verify successful payment |
| Payment Cancel | GET | `/payments/cancel` | Handle cancelled payment |

---

# Dashboard

## Tenant

| ------------------ | ----------------------------------- |
| Dashboard Overview | `GET /tenant/dashboard` |
| My Rentals | `GET /rentals` |
| Payment History | `GET /payments` |

---

## Landlord

| Component          | Endpoint                            |
| ------------------ | ----------------------------------- |
| Dashboard Overview | `GET /landlord/dashboard`           |
| My Properties      | `GET /landlord/properties`          |
| Rental Requests    | `GET /landlord/properties/requests` |

---

## Admin

| ------------------ | ----------------------------------- |
| Dashboard Overview | `GET /admin/dashboard` |
| All Users | `GET /admin/users` |
| Get Properties | `GET /admin/properties` |
| Get Rentals | `GET admin/rentals` |

---

# Error Handling

The frontend provides consistent error handling for all API requests.

- Toast notifications for API failures.
- Inline validation errors for forms.
- Error Boundary for unexpected runtime errors.
- Loading indicators during API requests.
- Graceful handling of `401 Unauthorized` by redirecting to the Login page.

---

# Authentication Strategy

- Authentication uses **HttpOnly Cookie**.
- All requests include:

```ts
credentials: "include";
```

- The backend validates the cookie and returns the authenticated user.
- The Navbar fetches `/users/me` to determine the current authentication state.

---

# Technologies

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- React Hook Form
- Fetch API
- Stripe / SSLCommerz
