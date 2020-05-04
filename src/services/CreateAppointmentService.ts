import { startOfHour } from 'date-fns';
import Appointment from '../models/Appointment';
import AppointmentRepository from '../repositories/AppointmentsRepository';
/*
 *[x]  Rcebimento das informações
 *[x] trativas de erros/exessões
 *[x] Acesso ao repositório
 */

interface RequestDTO {
  provider: string;
  date: Date;
}

/*
Dependency Inversion(SOLID)
*/

class CreateAppointmentService {
  private appointmentsRepository: AppointmentRepository;

  constructor(appointmentsRepository: AppointmentRepository) {
    this.appointmentsRepository = appointmentsRepository;
  }

  public execute({ date, provider }: RequestDTO): Appointment {
    const appointmentDate = startOfHour(date);

    const findAppointmentInSameDate = this.appointmentsRepository.findByDate(
      appointmentDate,
    );

    if (findAppointmentInSameDate) {
      throw Error('This appointment is already booked');
    }
    const appointment = this.appointmentsRepository.create({
      provider,
      date: appointmentDate,
    });
    return appointment;
  }
}

export default CreateAppointmentService;
