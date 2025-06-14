﻿// <auto-generated />
using System;
using MODULOCLIENTE.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace MODULOCLIENTE.Migrations
{
    [DbContext(typeof(DataBase))]
    partial class DataBaseModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("MODULOCLIENTE.Models.Cliente", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("Apellido")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("CorreoElectronico")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Nombre")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Telefono")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("TipoDeLicencia")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Clientes");
                });

            modelBuilder.Entity("MODULOCLIENTE.Models.EvaluacionCliente", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("id"));

                    b.Property<int>("ClienteId")
                        .HasColumnType("integer");

                    b.Property<string>("Comentario")
                        .HasColumnType("text");

                    b.Property<DateTime>("FechaEvaluacion")
                        .HasColumnType("timestamp with time zone");

                    b.Property<int>("Puntuacion")
                        .HasColumnType("integer");

                    b.HasKey("id");

                    b.HasIndex("ClienteId");

                    b.ToTable("Evaluaciones");
                });

            modelBuilder.Entity("MODULOCLIENTE.Models.HistorialAcceso", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("id"));

                    b.Property<int>("ClienteId")
                        .HasColumnType("integer");

                    b.Property<string>("DetallesAcesso")
                        .HasColumnType("text");

                    b.Property<string>("Diapositivo")
                        .HasColumnType("text");

                    b.Property<string>("DireccionIp")
                        .HasColumnType("text");

                    b.Property<DateTime>("FechaAcesso")
                        .HasColumnType("timestamp with time zone");

                    b.HasKey("id");

                    b.HasIndex("ClienteId");

                    b.ToTable("HistorialAccesos");
                });

            modelBuilder.Entity("MODULOCLIENTE.Models.HistorialAlquiler", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("id"));

                    b.Property<int>("ClienteId")
                        .HasColumnType("integer");

                    b.Property<string>("DetallesVehiculo")
                        .HasColumnType("text");

                    b.Property<DateTime>("FechaAlquiler")
                        .HasColumnType("timestamp with time zone");

                    b.Property<DateTime>("FechaDevolucion")
                        .HasColumnType("timestamp with time zone");

                    b.HasKey("id");

                    b.HasIndex("ClienteId");

                    b.ToTable("HistorialAlquileres");
                });

            modelBuilder.Entity("MODULOCLIENTE.Models.MetodoPago", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<int>("ClienteId")
                        .HasColumnType("integer");

                    b.Property<string>("Detalles")
                        .HasColumnType("text");

                    b.Property<DateTime>("FechaExpiracion")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("NumeroDeTarjeta")
                        .HasColumnType("text");

                    b.Property<string>("Tipo")
                        .HasColumnType("text");

                    b.Property<int?>("VerificacionId")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("ClienteId");

                    b.HasIndex("VerificacionId");

                    b.ToTable("MetodosPago");
                });

            modelBuilder.Entity("MODULOCLIENTE.Models.Notificacion", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<int>("ClienteId")
                        .HasColumnType("integer");

                    b.Property<DateTime>("FechaNotificacion")
                        .HasColumnType("timestamp with time zone");

                    b.Property<bool>("Leida")
                        .HasColumnType("boolean");

                    b.Property<string>("Mensaje")
                        .HasColumnType("text");

                    b.Property<string>("Titulo")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("ClienteId");

                    b.ToTable("Notificaciones");
                });

            modelBuilder.Entity("MODULOCLIENTE.Models.Reclamo", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<int>("ClienteId")
                        .HasColumnType("integer");

                    b.Property<string>("Descripcion")
                        .HasColumnType("text");

                    b.Property<string>("Estado")
                        .HasColumnType("text");

                    b.Property<DateTime>("FechaReclamo")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("Titutlo")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("ClienteId");

                    b.ToTable("Reclamos");
                });

            modelBuilder.Entity("MODULOCLIENTE.Models.Verificacion", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<int>("ClienteId")
                        .HasColumnType("integer");

                    b.Property<bool>("CorreoElectronicoVerificado")
                        .HasColumnType("boolean");

                    b.Property<DateTime>("FechaVerificacion")
                        .HasColumnType("timestamp with time zone");

                    b.Property<bool>("LicenciaVerificada")
                        .HasColumnType("boolean");

                    b.Property<bool>("TelefonoVerificado")
                        .HasColumnType("boolean");

                    b.HasKey("Id");

                    b.HasIndex("ClienteId");

                    b.ToTable("Verificaciones");
                });

            modelBuilder.Entity("MODULOCLIENTE.Models.EvaluacionCliente", b =>
                {
                    b.HasOne("MODULOCLIENTE.Models.Cliente", "Cliente")
                        .WithMany("Evaluaciones")
                        .HasForeignKey("ClienteId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Cliente");
                });

            modelBuilder.Entity("MODULOCLIENTE.Models.HistorialAcceso", b =>
                {
                    b.HasOne("MODULOCLIENTE.Models.Cliente", "Cliente")
                        .WithMany("HistorialAccesos")
                        .HasForeignKey("ClienteId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Cliente");
                });

            modelBuilder.Entity("MODULOCLIENTE.Models.HistorialAlquiler", b =>
                {
                    b.HasOne("MODULOCLIENTE.Models.Cliente", "Cliente")
                        .WithMany("HistorialAlquileres")
                        .HasForeignKey("ClienteId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Cliente");
                });

            modelBuilder.Entity("MODULOCLIENTE.Models.MetodoPago", b =>
                {
                    b.HasOne("MODULOCLIENTE.Models.Cliente", "Cliente")
                        .WithMany("MetodosPago")
                        .HasForeignKey("ClienteId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("MODULOCLIENTE.Models.Verificacion", "Verificacion")
                        .WithMany()
                        .HasForeignKey("VerificacionId");

                    b.Navigation("Cliente");

                    b.Navigation("Verificacion");
                });

            modelBuilder.Entity("MODULOCLIENTE.Models.Notificacion", b =>
                {
                    b.HasOne("MODULOCLIENTE.Models.Cliente", "Cliente")
                        .WithMany("Notificaciones")
                        .HasForeignKey("ClienteId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Cliente");
                });

            modelBuilder.Entity("MODULOCLIENTE.Models.Reclamo", b =>
                {
                    b.HasOne("MODULOCLIENTE.Models.Cliente", "Cliente")
                        .WithMany("Reclamos")
                        .HasForeignKey("ClienteId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Cliente");
                });

            modelBuilder.Entity("MODULOCLIENTE.Models.Verificacion", b =>
                {
                    b.HasOne("MODULOCLIENTE.Models.Cliente", "Cliente")
                        .WithMany("Verificaciones")
                        .HasForeignKey("ClienteId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Cliente");
                });

            modelBuilder.Entity("MODULOCLIENTE.Models.Cliente", b =>
                {
                    b.Navigation("Evaluaciones");

                    b.Navigation("HistorialAccesos");

                    b.Navigation("HistorialAlquileres");

                    b.Navigation("MetodosPago");

                    b.Navigation("Notificaciones");

                    b.Navigation("Reclamos");

                    b.Navigation("Verificaciones");
                });
#pragma warning restore 612, 618
        }
    }
}
