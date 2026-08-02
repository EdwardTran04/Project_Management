# Authentication Flow

> Các screens chuẩn cho login, signup, password reset.

---

## 🏗️ Layout Pattern

### Centered Card

```
[          Background           ]
[       ┌─────────────┐          ]
[       │  [Logo]     │          ]
[       │  Welcome    │          ]
[       │  [Form]     │          ]
[       │  [Submit]   │          ]
[       │  Forgot? Sign up?      ]
[       └─────────────┘          ]
```

### Split Screen

```
┌──────────────────┬───────────────┐
│   [Marketing]    │  Welcome back │
│   [Hero image]   │  [Form]       │
│   Tagline        │  [Submit]     │
└──────────────────┴───────────────┘
```

---

## 📋 Common Screens

1. **Login** — Email + Password, Remember me, Social login
2. **Sign Up** — Name + Email + Password, Terms agreement
3. **Forgot Password** — Email input, Send reset link
4. **Reset Password** — New password + Confirm, Requirements
5. **Verify Email** — 6-digit code, Resend, Timer
6. **Two-Factor Auth** — 6-digit code, Backup codes

---

## 💻 Example: Login

```jsx
<AuthLayout>
  <Card padding="32px" maxWidth="400px">
    <Logo />
    <Heading h2>Welcome back</Heading>
    <Text muted>Sign in to your account</Text>

    <Form onSubmit={handleLogin}>
      <FormField>
        <Label>Email</Label>
        <Input type="email" autoComplete="email" />
      </FormField>

      <FormField>
        <Label>Password</Label>
        <PasswordInput autoComplete="current-password" />
      </FormField>

      <Flex justify="between">
        <Checkbox label="Remember me" />
        <Link href="/forgot">Forgot password?</Link>
      </Flex>

      <Button type="submit" variant="primary" fullWidth size="lg">
        Sign in
      </Button>

      <Divider>Or</Divider>

      <Button variant="secondary" fullWidth icon={<GoogleIcon />}>
        Sign in with Google
      </Button>
    </Form>

    <Text align="center">
      Don't have an account?
      <Link href="/signup">Sign up</Link>
    </Text>
  </Card>
</AuthLayout>
```

---

## ✅ Best Practices

- ✅ `autoComplete` attributes (email, current-password, new-password)
- ✅ Show/hide password toggle
- ✅ Caps lock warning trên password
- ✅ Error message inline
- ✅ Loading state trên submit
- ✅ Rate limit warning
- ✅ Social login above the fold
- ❌ Không clear form sau error

---

## ♿ Accessibility

- ✅ Form labels rõ ràng
- ✅ Error message liên kết qua `aria-describedby`
- ✅ Auto-focus first field
- ✅ Keyboard navigation đầy đủ

---

## 🔗 Related

[Form →](../components/organisms/form.md) | [Input →](../components/atomic/input.md)
