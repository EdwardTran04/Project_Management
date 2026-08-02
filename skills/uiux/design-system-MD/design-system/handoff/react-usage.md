# React Usage Examples

> Best practices và common patterns cho React + VTIT Design System.

---

## 📦 Setup

```bash
npm install react react-dom
npm install -D @types/react @types/react-dom typescript

# Recommended deps
npm install lucide-react clsx tailwind-merge
npm install @radix-ui/react-dialog @radix-ui/react-dropdown-menu
```

---

## 🎨 Common Components

### Button

```tsx
import { Button } from '@/components/ui';

// Variants
<Button variant="primary">Save</Button>
<Button variant="secondary">Cancel</Button>
<Button variant="ghost">Learn more</Button>
<Button variant="destructive">Delete</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// With icon
import { Plus } from 'lucide-react';
<Button leadingIcon={<Plus />}>Add Item</Button>

// Loading
<Button loading>Saving...</Button>

// Full width
<Button fullWidth>Sign in</Button>
```

### Input

```tsx
import { Input, FormField, Label, HelperText } from '@/components/ui';

<FormField>
  <Label htmlFor="email" required>Email</Label>
  <Input
    id="email"
    type="email"
    placeholder="you@example.com"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    error={!!errors.email}
  />
  <HelperText error={!!errors.email}>
    {errors.email || "We'll never share your email"}
  </HelperText>
</FormField>
```

### Modal

```tsx
import { Modal, Button } from '@/components/ui';
import { useState } from 'react';

function DeleteDialog() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button variant="destructive" onClick={() => setIsOpen(true)}>
        Delete
      </Button>

      <Modal open={isOpen} onClose={() => setIsOpen(false)} size="sm">
        <Modal.Header>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          This action cannot be undone. Are you sure?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button variant="destructive" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
```

### Form with Validation

```tsx
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email'),
});

type FormData = z.infer<typeof schema>;

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    await api.contact(data);
    toast.success('Message sent!');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormField>
        <Label htmlFor="name" required>Name</Label>
        <Input
          id="name"
          {...register('name')}
          error={!!errors.name}
        />
        {errors.name && (
          <HelperText error>{errors.name.message}</HelperText>
        )}
      </FormField>

      <FormField>
        <Label htmlFor="email" required>Email</Label>
        <Input
          id="email"
          type="email"
          {...register('email')}
          error={!!errors.email}
        />
        {errors.email && (
          <HelperText error>{errors.email.message}</HelperText>
        )}
      </FormField>

      <Button type="submit" loading={isSubmitting}>
        Send
      </Button>
    </form>
  );
}
```

---

## 🎯 Custom Hooks

### `useToast`

```tsx
import { toast } from '@/components/ui/toast';

function MyComponent() {
  const handleSave = async () => {
    try {
      await saveData();
      toast.success('Saved successfully');
    } catch (err) {
      toast.error('Failed to save', {
        description: err.message,
        action: { label: 'Retry', onClick: handleSave },
      });
    }
  };
}
```

### `useTheme`

```tsx
import { useTheme } from '@/hooks/useTheme';

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? <Sun /> : <Moon />}
    </Button>
  );
}
```

### `useMediaQuery`

```tsx
import { useMediaQuery } from '@/hooks/useMediaQuery';

function ResponsiveLayout() {
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  return isDesktop ? <DesktopLayout /> : <MobileLayout />;
}
```

---

## 📐 Layout Patterns

### Dashboard Layout

```tsx
function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-y-auto p-8 bg-bg-secondary">
          {children}
        </main>
      </div>
    </div>
  );
}
```

### Auth Layout

```tsx
function AuthLayout({ children }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-secondary p-4">
      <Card className="w-full max-w-md p-8">
        <Logo className="mx-auto mb-6" />
        {children}
      </Card>
    </div>
  );
}
```

---

## 🚀 Performance Tips

### Code Splitting

```tsx
import { lazy, Suspense } from 'react';

const Dashboard = lazy(() => import('./Dashboard'));

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Dashboard />
    </Suspense>
  );
}
```

### Memoization

```tsx
import { memo, useMemo, useCallback } from 'react';

const ExpensiveList = memo(({ items, onSelect }) => {
  return items.map(item => (
    <Item key={item.id} {...item} onSelect={onSelect} />
  ));
});

function Parent({ data }) {
  const sortedData = useMemo(
    () => [...data].sort((a, b) => a.name.localeCompare(b.name)),
    [data]
  );

  const handleSelect = useCallback((id) => {
    console.log(id);
  }, []);

  return <ExpensiveList items={sortedData} onSelect={handleSelect} />;
}
```

---

## ♿ Accessibility Patterns

### Focus Management

```tsx
import { useEffect, useRef } from 'react';

function Modal({ open, children }) {
  const firstFocusable = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (open) {
      firstFocusable.current?.focus();
    }
  }, [open]);

  return open ? (
    <div role="dialog" aria-modal="true">
      <button ref={firstFocusable}>...</button>
      {children}
    </div>
  ) : null;
}
```

### Live Region

```tsx
function StatusMessage({ message }) {
  return (
    <div role="status" aria-live="polite" className="sr-only">
      {message}
    </div>
  );
}
```

---

## 🔗 Related

- [Developer Guide →](developer-guide.md)
- [Tailwind Config →](tailwind-config.md)
