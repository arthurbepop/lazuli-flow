/**
 * Common Types
 * Shared type definitions across the application
 */

/**
 * Generic API Response
 */
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
  timestamp?: string;
}

/**
 * Pagination Info
 */
export interface PaginationInfo {
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
}

/**
 * Paginated Response
 */
export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: PaginationInfo;
}

/**
 * API Error
 */
export interface ApiError {
  status: number;
  message: string;
  code?: string;
  details?: Record<string, unknown>;
}

/**
 * User/Session related
 */
export interface User {
  id: string;
  email: string;
  name: string;
  role?: "admin" | "user";
  createdAt?: string;
  updatedAt?: string;
}

/**
 * Navigation Item
 */
export interface NavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  children?: NavItem[];
}

/**
 * Section Component Props
 */
export interface SectionProps {
  id?: string;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Loading State
 */
export interface LoadingState {
  isLoading: boolean;
  error?: Error | null;
  isSuccess?: boolean;
}
