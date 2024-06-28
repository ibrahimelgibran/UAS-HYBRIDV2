import { Component } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
})
export class NotesPage {
  notes$ = this.profileService.notes$;

  constructor(private profileService: ProfileService, private router: Router) {}

  goBack() {
    history.back();
  }

  addNote() {
    // Contoh: Buat objek catatan baru
    const newNote = {
      id: Math.floor(Math.random() * 1000), // Contoh: Pembuatan ID sementara
      title: 'New Note', // Gantilah dengan judul sesuai input pengguna
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', // Gantilah dengan isi catatan sesuai input pengguna
      date: new Date(), // Tanggal saat ini
    };

    this.profileService.addToNotes(newNote); // Panggil fungsi dari service untuk menambah catatan
    this.router.navigateByUrl('/notes'); // Redirect kembali ke halaman Notes setelah menambah catatan
  }
}
