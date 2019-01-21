import { AppError } from './AppError';

export class NetworkError extends AppError {
    toString() {
        return "NetworkError: " + super.toString();
    }
}